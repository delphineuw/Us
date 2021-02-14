# Us

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

<h2 id="setup">Setup 🖥</h2>

```git clone```

```cd <directory>```

```npm install```

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

