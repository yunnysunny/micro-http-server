#!/bin/bash
mkdir -p /tmp/result/ /tmp/output/
JMETER="/opt/apache-jmeter-5.4.1/bin/jmeter.sh"
RESULT=/tmp/result/${FRAMEWORK}-result.jtl
HTML=/tmp/reporter/${FRAMEWORK}
PARAM_BENCH="-n -t /config/http.jmx \
-l  ${RESULT} \
-e -o /tmp/output/"
echo run "$PARAM_BENCH"
rm -rf $RESULT
rm -rf $HTML
$JMETER $PARAM_BENCH

$JMETER -g "$RESULT" -e -o "$HTML"
ls "$HTML"
echo generate html finished