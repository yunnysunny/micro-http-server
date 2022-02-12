#!/bin/bash

JMETER="/opt/apache-jmeter-5.4.1/bin/jmeter.sh"
RESULT=/tmp/result/result.jtl
HTML=/tmp/reporter/
PARAM_BENCH="-n -t /config/http.jmx \
-l  ${RESULT} \
-e -o /tmp/output/"
echo run "$PARAM_BENCH"
$JMETER $PARAM_BENCH

$JMETER -g $RESULT -e -o $HTML
ls $HTML
echo generate html finished