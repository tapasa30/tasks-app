DOCKER_COMPOSE := docker-compose -p tasks_app -f docker-compose.yml

build:
	@$(DOCKER_COMPOSE) build --no-cache

up:
	@$(DOCKER_COMPOSE) up -d

down:
	@$(DOCKER_COMPOSE) down

serve_app:
	@$(DOCKER_COMPOSE) exec --user=$(shell id -u) node yarn install
	@$(DOCKER_COMPOSE) exec --user=$(shell id -u) node yarn start
