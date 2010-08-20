#!/bin/bash

MEMCACHED='/usr/local/bin/memcached'
BEANSTALKD='/usr/local/bin/beanstalkd'

case $1 in
	"start")	  
	  ${MEMCACHED} -d -p11311 -unobody
	  ${MEMCACHED} -d -p11312 -unobody
	  ${MEMCACHED} -d -p11313 -unobody
	  ${BEANSTALKD} -d -l 127.0.0.1 -p 11300
		;;
		
  "restart")
	  $0 shutdown
	  $0 start
    ;;
    
  "shutdown")
    killall ${MEMCACHED}
    killall ${BEANSTALKD}
    ;;
esac

