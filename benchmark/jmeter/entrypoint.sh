#!/bin/bash

JMETER="/opt/apache-jmeter-5.4.1/bin/jmeter.sh"
RESULT=/tmp/result/${FRAMEWORK}/result.jtl
HTML=/tmp/reporter/${FRAMEWORK}.html
PARAM_BENCH="-n -t /config/http.jmx \
-l  ${RESULT} \
-e -o /tmp/output/${FRAMEWORK}"

$JMETER "$PARAM_BENCH"

$JMETER -g "$RESULT" -e -o "$HTML"