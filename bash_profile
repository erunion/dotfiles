if [ -f ~/.git-completion.bash ]; then
  . ~/bin/git-completion.bash
fi

[[ -s ~/.bashrc ]] && source ~/.bashrc

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
