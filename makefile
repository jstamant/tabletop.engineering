.PHONY: build
build:
	hugo

.PHONY: push
push:
	rsync -avz --delete -e "ssh -p 35531" public/* jstamant@tabletop.engineering:/srv/http/tte

.PHONY: clean
clean:
	rm -r public
