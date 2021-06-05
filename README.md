# Us

- Focus group (700)
- Mailing list coming soon - landing page (subscribers)
- Aperçu
    - Ftr : Event (join/create) - Search - Profile (create/edit)

- Dates:
    - 15 juin : job yourself
    -         
- TODO
    - OK Delphine :
        - Image de fond (libre de droit)
        - Textes à mettre sur la landing
        - compte netlify
        - compte gmail : Google form !
    - OK Landing avec Google form
    - TODO Lien vers le protoype après signup
    - OK Deploy frontend
        - expo web
            - NICE2HAVE https://www.google.com/search?q=expo+wfeb+Invalid+mimeType+for+image&rlz=1C5CHFA_enBE922BE922&oq=expo+web+Invalid+mimeType+for+image&aqs=chrome..69i57j33i10i160.2647j0j1&sourceid=chrome&ie=UTF-8
                - https://stackoverflow.com/questions/58801882/display-image-or-video-depending-on-content-type-mime-type-in-react-native
            - https://docs.expo.io/distribution/publishing-websites/
            - ALT
                - https://toastui.medium.com/from-zero-to-publish-expo-web-react-native-for-web-tutorial-e3e020d6d3ff
                - https://www.youtube.com/watch?v=Czih6w57P9A
        - staging https://app.netlify.com/sites/us-theapp-staging/overview
        - https://us-theapp-staging.netlify.app/app.html
        - TODO prod
        - NICE2HAVE deploy git
        - NICE2HAVE env https://medium.com/@pdx.lucasm/dotenv-nodemon-a380629e8bff
    - OK Deploy backend
        - My heroku https://dashboard.heroku.com/apps/us-demo
        - https://devcenter.heroku.com/articles/heroku-cli
        - DB 
            - https://dashboard.jawsdb.com/mysql/dashboard
            - https://dashboard.heroku.com/apps/us-demo/resources
            - https://elements.heroku.com/addons
            - https://elements.heroku.com/addons/jawsdb#pricing
        - INIT
            - https://sequelize.org/v5/manual/migrations.html#running-migrations
            - https://sequelize.org/v5/manual/migrations.html#production-usages
            - https://sequelize.org/v5/manual/migrations.html
        - ADMIN : https://us-demo.herokuapp.com/admin/
    - Logout 
    - TODO Menu nav (back)
    - TODO Fix date picker
    - TODO Fix img upload
    - TODO Fix scrollable events
    - TODO Integrate Hobby, Event, Profile, Register for backend
    - Other code TODOs
    - [17:31, 5/24/2021] Ludo: 1/ Que tu crées un compte sur https://www.heroku.com/ pour héberger le backend (pour l'instant c'est sur le mien 😉 )
      [17:33, 5/24/2021] Ludo: 2/ Que tu me donnes les accès au compte github ou en créé un (par ex. sur https://about.gitlab.com/ ) afin que je puisse t'envoyer le code source mis à jour
      [17:35, 5/24/2021] Ludo: 3/ Qu'une fois la liste établie, on discute 🙂 En réalité, j'ai peu de temps pour "Us" comme tu le sais, et par expérience il y'a 1000 choses à faire dessus au niveau technique et je crains que tu auras besoin de qqun plus svt.

-----
<h2>Table of Contents</h2>

<ol>
  <li><a href="#setup">Setup</a></li>
  <li><a href="#admin">Admin Panel</a></li>
  <li><a href="#comp">Components</a></li>
  <ul>
    <li><a href="#form">Form</a></li> 
    <li><a href="#textInp">Text Input</a></li>
    <li><a href="#radioInp">Radio Input</a></li>
    <li><a href="#dateInp">Date Input</a></li>
     <li><a href="#card">Card</a></li> 
    <li><a href="#btn">Buttons</a></li>
    <li><a href="#fab">Fab</a></li>
    <li><a href="#map">Map</a></li>
  </ul>
</ol>  

<h2 id="setup">LGU remark</h2>
- Mysql DB
-  npx sequelize-cli db:seed:all
-  comment event.start/end
- fix some issues for localhost string
- ifconfig for ip = IF <en0>
- android : same wifi as server
- android mi A1 : fucked up layout

- https://github.com/Chion82/native-base-web
- https://fermicoding.com/blogs/sharing-code-between-react-and-react-native-apps-part-1
- https://github.com/necolas/react-native-web
- https://necolas.github.io/react-native-web/docs/multi-platform/
- https://docs.expo.io/guides/running-in-the-browser/
- https://docs.expo.io/guides/customizing-webpack/
- https://forums.expo.io/t/how-to-use-native-base-components-with-expo-sdk-33-for-web/23711/15

<h2 id="setup">Setup 🖥</h2>

```git clone```

```cd <directory>```

```npm install```

additionnal :

```// npm install netlify-cli -g```
```brew tap heroku/brew && brew install heroku```


*You have to set environnement variables* in the "backend" directory as follows:

```json
// nodemon.json

{
  "env": {
    "PORT": 4000,
    "DB_HOST": <localhost?>,
    "DB_USER": "root",
    "DB_PASSWORD": <password?>,
    "DB_NAME": "us"
  }
}
```

in the config directory, add a file called config.json. 

```
{
  "development": {
    "username": "root",
    "password": "<password?>",
    "database": "us",
    "host": " <localhost?>",
    "dialect": "mysql",
    "PORT": 4000
  },
  "test": {
    "username": "root",
    "password": "<password?>",
    "database": "us",
    "host": " <localhost?>",
    "dialect": "mysql",
    "PORT": 4000
  },
  "production": {
    "username": "root",
    "password": "<password?>",
    "database": "us",
    "host": " <localhost?>",
    "dialect": "mysql",
    "PORT": 4000
  }
}
```

In the case, you receive a network issue message;
add a file in utils, names 'idAdd.js' and add it to the gitignore file. Inside this file, add your ip address.
repeat the operation in the frontend directory;

```
const ipAdd = "<your ip address>";
export default ipAdd;

```
When it's done, setup sequelize with this cmds 

npx sequelize db:migrate

you can read more on the sequelize doc here => https://github.com/sequelize/cli

To run the app, install expo and/or an IOS/Android emulator.

<h2 id="admin">Admin Panel 📝</h2>

you can manage the app with the Admin Panel at this address 

``` http://localhost:4000/admin/login ```

in order to login, add this lines to the nodemon.json file;

```
{
  "env": {
    "PORT": 4000,
    "DB_HOST": <localhost?>,
    "DB_USER": "root",
    "DB_PASSWORD": <password?>,
    "DB_NAME": "us"
    "ADMIN_EMAIL": "<email?>",
    "ADMIN_PASSWORD": "<user_name?>"
  }
}
```

<h2 id="comp">Components Doc 📝</h2>

<h3 id="form"><ins>Form</ins></h3>

**v2**

`<Form inputs={exampleForm} onSubmit={submitHandler} /> `

### inputs

<ul>
<li>Type: Array </li>
<li>Required: True</li>
</ul>

### onSubmmit

<ul>
<li>Type: Callback </li>
<li>Required: True</li>
</ul>

<h3 id="textInp"><ins>Text Input</ins></h3>

**v2**

```javascript
<InputTemplate
    placeholder={input.placeholder}
    label={input.label}
    multiline={input.multiline}
    type={input.type}
    security={input.security}
    autoCapitalize={input.autoCapitalize}
    value={input.value}
    onChange={text => changeHandler(text, input)}
    />
```

### id

<ul>
<li>Type: Number </li>
<li>Required: True</li>
</ul>

### render

<ul>
<li>Type: 'text' </li>
<li>Required: True</li>
</ul>

### placeholder

<ul>
<li>Type: String </li>
<li>Required: False</li>
</ul>

### label

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

### multiline

<ul>
<li>Type: Boolean </li>
<li>Required: True</li>
</ul>

### type

<ul>
<li>Type: String ❗️ (https://reactnative.dev/docs/textinput#textcontenttype) </li>
<li>Required: True</li>
</ul>

### security

<ul>
<li>Type: Boolean </li>
<li>Required: False</li>
</ul>

### autoCapitalize

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

### value

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

<h3 id="radioInp"><ins>Radio Input</ins></h3>

**v2**

```javascript
<RadioTemplate
       label={input.label}
       options={input.options}
       value={input.value}
       onChange={option => changeHandler(option, input)}
       />
```

### label

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

### options

<ul>
<li>Type: Array </li>
<li>Required: True</li>
</ul>

### value

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

<h3 id="dateInp"><ins>Date Input</ins></h3>

**v2**

```javascript
<DatePickerTemplate
       label={input.label}
       value={input.value}
       onChange={date => changeHandler(date, input)}
       />
```

### label

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

### value

<ul>
<li>Type: String </li>
<li>Required: True</li>
</ul>

### Example:

```javascript
const exampleForm = [
  {
    id: 1,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Email',
    multiline: false,
    type: 'emailAddress',
    security: false,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 2,
    render: 'text',
    placeholder: 'Write here...',
    label: 'Password',
    multiline: false,
    type: 'password',
    security: true,
    autoCapitalize: 'none',
    value: ''
  },
  {
    id: 3,
    render: 'radio',
    label: 'Gender',
    options: ['Male', 'Female', 'Other'],
    value: 'Other'
  },
  {
    id: 4,
    render: 'date',
    label: 'Date of birth',
    value: new Date()
  }
];

const App = () => {
  const submitHandler = data => console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FormTemplate inputs={exampleForm} onSubmit={submitHandler} />
    </View>
  );
};
```

WORK IN PROGRESS ...

