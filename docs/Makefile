SRCS=$(wildcard *.d2)
DSTS=$(patsubst %.d2,%.svg,$(SRCS))

all: $(DSTS)

%.svg: %.d2
	d2 $^ $@ --layout=elk --sketch=true