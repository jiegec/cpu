#!/bin/sh
for source in *.d2
do
	d2 $source --layout=elk --sketch=true
done