# Us

# Setup 🖥

`cd <directory>`

`npm install`

Work in progress 🔨

# Components Doc 📝

## Form

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

## Inputs Text

**v2**

```
<InputTemplate
    placeholder={input.placeholder}
    label={input.label}
    multiline={input.multiline}
    type={input.type}
    security={input.security}
    autoCapitalize={input.autoCapitalize}
    key={input.id}
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

## Inputs Radio

**v2**

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

## Inputs Date

**v2**

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

```
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



