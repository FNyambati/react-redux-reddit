![React Redux Reddit Screenshot](/public/images/RepoScreenShot.png?raw=true "Optional Title")

# React Redux Reddit

Remake of the internet's biggest forum [Reddit](https://www.reddit.com/). Taking advantage of their public [API](https://www.reddit.com/dev/api) and displaying the hot posts of my favorite subreddits.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Technologies Used:
* [React](https://reactjs.org/)
* [Redux (with Logger and Thunk)](https://reduxjs.org/)
* [Semantic UI](https://semantic-ui.com/)
* [Cross-Fetch](https://github.github.io/fetch/)

## Setup

* `Fork` or `Clone` this repository.
* run `yarn` to install dependencies
* run `yarn start` to start server at `localhost:3000`
* Navigate to `components/Navbar.js`
* Update the `<Menu.Item />` to the sub of your choice.

### Example
```
<Menu.Item name='{*sub_name*}' active={selectedSub === '{*sub_name*}'}/>
<Menu.Item name='{nba}' active={selectedSub === '{nba}'}/>

```

## <a href="https://fnyambati.github.io/react-redux-reddit" target="_blank">Live Demo</a>
