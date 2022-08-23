# CougarConnect

This is CougarConnect, a mobile app that helps build vibrant communities at the University of Houston.

## Development Setup
~~1. Use `yarn install` to install node modules~~<br>
~~2. Use `expo install expo-font @expo-google-fonts/lato` to install fonts~~<br>
~~3. Install the Expo Go app on your phone~~<br>
~~4. Run `expo start` to start expo server~~<br>
1. Install [docker-compose](https://docs.docker.com/compose/)
2. Organize the directories in this fashion:
	- docker-compose.dev.yml
	- Recharge-App
	- Recharge-Backend
	- Recharge-Database
2. Run `docker-compose -f docker-compose.dev.yml build --no-cache && docker-compose -f docker-compose.dev.yml up` to start the containers
3. Run `docker-compose -f docker-compose.dev.yml down` to stop the containers
4. Interact with `mariadb` container with `mysql -u root -ppassword -h 0.0.0.0 -D recharge`

## Resources
- [React Native Props documentation](https://reactnative.dev/docs/layout-props)
