#!/bin/bash

JMETER="/opt/apache-jmeter-5.4.1/bin/jmeter.sh"
RESULT=/tmp/result/${FRAMEWORK}_result.jtl
HTML=/tmp/reporter/${FRAMEWORK}
PARAM_BENCH="-n -t /config/http.jmx \
-l  ${RESULT} \
-e -o /tmp/output/${FRAMEWORK}"
echo run "$PARAM_BENCH"
$JMETER $PARAM_BENCH

$JMETER -g "$RESULT" -e -o "$HTML"
echo generate html finished