# Copyright KhulnaSoft, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

include .github/build/Makefile.show-help.mk

setup-libs: 
	## "DEPRECATED: This target is deprecated. Use `make setup`.

## Install khulnasoft.com dependencies your local machine.
setup:
	npm install

## Run khulnasoft.com on your local machine.
site:
	npm start
	
## Run khulnasoft.com on your local machine. Alternate method.
site-fast:
	gatsby develop

## Build khulnasoft.com on your local machine.
build:
	gatsby build && gatsby serve

## Empty build cache and run khulnasoft.com on your local machine.
clean: 
	gatsby clean && make site

## Run Eslint on your local machine.
lint:
	npm run lint

.PHONY: setup build site clean site-fast lint
