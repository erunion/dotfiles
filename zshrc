# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/erunion/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="powerlevel10k/powerlevel10k"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"
#export PATH="/usr/local/opt/php@7.3/bin:$PATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
export EDITOR=nano

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias scavenge='find -L . -type f -print0 | xargs -0 grep -i'

dc-build-and-run() {
  docker-compose build $1 && docker-compose run $1
}

dc-build-and-up() {
  docker-compose build $1 && docker-compose up $1
}

# https://gist.github.com/SheldonWangRJT/8d3f44a35c8d1386a396b9b49b43c385
# https://gist.github.com/mcmoe/c76895ee86bd5293d58aca7a75afb6b2
function v2g() {
    src="" # required
    target="" # optional (defaults to source file name)
    resolution="" # optional (defaults to source video resolution)
    fps=10 # optional (defaults to 10 fps -- helps drop frames)

    while [ $# -gt 0 ]; do
        if [[ $1 == *"--"* ]]; then
                param="${1/--/}"
                declare $param="$2"
        fi
        shift
    done

    if [[ -z $src ]]; then
        echo -e "\nPlease call 'v2g --src <source video file>' to run this command\n"
        return 1
    fi

    if [[ -z $target ]]; then
        target=$src
    fi

    basename=${target%.*}
    [[ ${#basename} = 0 ]] && basename=$target
    target="$basename.gif"

    if [[ -n $fps ]]; then
        fps="-r $fps"
    fi

    if [[ -n $resolution ]]; then
        resolution="-s $resolution"
    fi

    runcommand="ffmpeg -i "$src" -pix_fmt rgb8 $fps $resolution "$target" && gifsicle -O3 "$target" -o "$target""

    echo ""
    echo ".------------------------."
    echo "|\\\\////////       90 min |"
    echo "| \\/  __  ______  __     |"
    echo "|    /  \|\.....|/  \    |"
    echo "|    \__/|/_____|\__/    |"
    echo "| A                      |"
    echo "|    ________________    |"
    echo "|___/_._o________o_._\___|"
    echo ""
    echo "ツ running >> $runcommand"
    echo "ツ ..."
    echo ""

    eval " $runcommand"
    osascript -e "display notification \"$target successfully converted and saved\" with title \"v2g complete\""
}

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

export PATH="/users/erunion/Library/Python/3.8/bin:$PATH"
