# IVD Lib

# Installing

```bash
npm install @yek-plus/ivd
```

# Usage

```js
const ivd = require("@yek-plus/ivd");
ivd()
  .get({
    ilNo: "34",
    vdNo: "034247",
    vNo: "3090345332",
    tckNo: "",
  })
  .then(console.log);
```

# Options

| property | type       | required | default            | description            |
| -------- | ---------- | -------- | ------------------ | ---------------------- |
| fetch    | `function` | false    | node-fetch package | request fetch function |

# Methods

## get

### Input

| property | type     | required | default | description                                            |
| -------- | -------- | -------- | ------- | ------------------------------------------------------ |
| ilNo     | `string` | true     | null    | Vergi numarasının kayıtlığı olduğu il id'si            |
| vdNo     | `string` | true     | null    | Vergi numarasının kayıtlığı olduğu vergi dairesi id'si |
| vNo      | `number` | false    | null    | Vergi numarası İsim                                    |
| tckNo    | `number` | false    | null    | TC kimlik numarası Yılı                                |

> Note: `vNo` or `tckNo` one of these is required

### Response

```js
const response = {
  durum: String,
  tckn: String,
  durum_text: String,
  vkn: String,
  vdkodu: String,
  sorgulayantckimlik: String,
  unvan: String,
  status: Boolean,
};
```

# Todo

- [ ] Write Tests
- [ ] Write ilNo getter method
- [ ] Write vdNo getter method
