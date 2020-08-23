'use strict'

/* an experiment in turdology */

const numb = (length = 1, zeropad = false) => {
  const num = Math.round(Math.random() * Math.pow(10, length))
  return zeropad ? `${num}`.padStart(length - num.toString().length) : num
}
const letter = (caps = false) => {
  const lettr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ][Math.floor(Math.random() * 26)]
  return caps ? lettr.toUpperCase() : lettr
}
const letters = (count = 1) => {
  let lttrs = ''
  for (let i = 0; i < count; i++) {
    lttrs += letter()
  }
  return lttrs
}
/* ty https://www.lipsum.com/feed/html */
const lorem = (caplength = false) => {
  const ipsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie eleifend mauris, id tincidunt dolor accumsan ut. Cras ante nisi, vehicula blandit ipsum a, viverra mattis mi. Donec quis augue ex. Morbi accumsan congue egestas. Suspendisse non est quis sem interdum dictum. Etiam tempus augue nunc, sit amet mattis eros vehicula in. Nullam tincidunt faucibus tellus non sollicitudin. Maecenas vel nunc nec neque vehicula sagittis vehicula vitae velit. Duis non quam leo. Nulla facilisi. Ut molestie purus nec mauris cursus rutrum.',
    'Aenean cursus nisi ut convallis lacinia. Nunc ut finibus tellus. Aliquam tristique nisl eget turpis aliquet porta lobortis viverra lacus. Quisque tincidunt lorem nec nisi posuere, eu tristique dui euismod. Donec viverra risus vel quam dictum, et tempus nisi consectetur. Quisque quis rhoncus felis. Nunc ut metus metus. Donec neque sapien, aliquam id risus in, aliquam accumsan odio. Aenean semper rutrum vulputate. Ut nisi nulla, tempus ac tincidunt quis, fermentum tincidunt mi. In sodales porta ligula eu iaculis. Aenean faucibus mollis dolor nec imperdiet.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec nibh nec nisl placerat viverra id ac erat. Sed sed lectus nec urna accumsan dictum. Praesent a metus imperdiet, consequat est nec, finibus mauris. Suspendisse tincidunt consectetur orci, ut aliquet lacus eleifend at. Nam in metus ac nisi pretium luctus non id est. In eleifend velit sit amet leo vulputate, eget tempor sapien accumsan. Maecenas interdum volutpat interdum. Phasellus sem enim, sagittis non sem ut, ultricies aliquam dolor. Cras iaculis felis ut molestie facilisis. Suspendisse bibendum tortor et dictum dictum. Integer feugiat elit sit amet orci sollicitudin egestas. Nullam ut mauris mattis, tincidunt erat non, commodo tortor. Sed ac est eu massa vulputate luctus eget pharetra mi. Duis iaculis sed felis quis lacinia.',
    'Vivamus mauris enim, mollis quis quam at, ultrices pulvinar nulla. Sed iaculis nulla eu neque tempus, nec posuere sem placerat. Curabitur id nisi mollis, fermentum odio ac, tempus turpis. Cras suscipit sem diam, eu rutrum ex molestie id. Suspendisse ex ante, faucibus non gravida nec, faucibus at elit. Sed quam tortor, lobortis at ante in, consequat venenatis eros. Nunc pellentesque ultricies turpis. Donec imperdiet consectetur ipsum vitae dapibus. Integer eu pellentesque magna.',
    'Sed tempor tempor congue. Vivamus ornare sapien non felis malesuada consectetur. Pellentesque auctor orci dignissim fermentum dictum. Morbi eget leo vitae magna dapibus fermentum. Vivamus facilisis lobortis vulputate. Ut eget laoreet ex. Cras augue dui, aliquam id odio in, tincidunt mattis nisi. Duis blandit commodo molestie.'
  ][Math.floor(Math.random() * 5)]
  return caplength ? ipsum.slice(0, caplength) : ipsum
}
const email = (length) => {
  const suffix = [
    '@future.gmail.com',
    '@protonmail.com',
    '@neohoo.net',
    '@galactinet.freedom',
    '@smorc.dork',
    '@bugzrule.hivemind'
  ][Math.floor(Math.random() * 6)]

  let uname = ''
  const len = Math.floor(Math.random() * 25) || length
  let i = 0
  for (; i < len; i++) {
    uname += Math.random() > 0.5 ? letter() : numb()
  }

  return uname + suffix
}
const password = (length = 10) => {
  let raw = ''
  for (let i = 0; i < length; i++) {
    raw += letter()
  }
  return Buffer.from(raw).toString('base64')
}
const uuid = (length = 24) => {
  let id = ''
  for (let i = 0; i < length; i++) {
    id += Math.random() > 0.5 ? letter(Math.random() > 0.5) : numb()
  }
  return id
}
const date = () => {
  return new Date(Math.floor(Math.random() * Math.pow(2, 46)))
}
const bool = (preset) => {
  if (preset.toString() === 'true' || preset.toString() === 'false') {
    return Boolean(preset)
  }
  return Math.random() > 0.5
}
const bloodtype = (passthrough) => {
  if (passthrough === true || passthrough === false) {
    return (
      ['A', 'AB', 'B', 'O', 'Zeta', 'V', 'VK'][Math.floor(Math.random() * 7)] +
      ['+', '-', ''][Math.floor(Math.random() * 3)]
    )
  }
  return passthrough
}
const name = (passthrough) => {
  if (passthrough === true || passthrough === false) {
    return Math.random() > 0.5
      ? letter(true) + letters(Math.ceil(Math.random() * 11))
      : letter(true) +
          letters(Math.ceil(Math.random() * 6)) +
          '-' +
          letters(Math.ceil(Math.random() * 10))
  }
  return passthrough
}

function make (template, inplace = {}) {
  const topLevelKeys = Object.keys(template)
  for (let i = 0; i < topLevelKeys.length; i++) {
    const key = topLevelKeys[i]
    const keysOfKey = Object.keys(template[key])

    const setValue = (func, value) => {
      switch (func) {
        case 'letter':
          return letter(value)
        case 'letters':
          return letters(value)
        case 'email':
          return email(value)
        case 'password':
          return password(value)
        case 'lorem':
          return lorem(value)
        case 'uuid':
          return uuid(value)
        case 'number':
          return numb(value)
        case 'date':
          return date(value)
        case 'boolean':
          return bool(value)
        case 'bloodtype':
          return bloodtype(value)
        case 'name':
          return name(value)
        default:
          return ''
      }
    }

    if (Array.isArray(template[key])) {
      for (let i = 0; i < keysOfKey.length; i++) {
        if (!inplace[key]) inplace[key] = []

        const k3y = Object.keys(template[key][keysOfKey[i]])[0]
        const valu3 = template[key][keysOfKey[i]][k3y]
        inplace[key].push(setValue(k3y, valu3))
      }

      continue
    }

    // dis yys nested mon
    if (
      ![
        'letters',
        'letter',
        'number',
        'uuid',
        'email',
        'password',
        'lorem',
        'date',
        'boolean',
        'bloodtype',
        'name'
      ].includes(keysOfKey[0])
    ) {
      inplace[key] = make(template[key])
      continue
    }

    // disn't nested mon
    inplace[key] = setValue(keysOfKey[0], template[key][keysOfKey])
  }

  return inplace
}

function socuments (count = 10, template = null) {
  if (!template) {
    template = {
      first: { name: true },
      last: { name: false },
      email: { email: 100 },
      password: { password: 36 },
      uuid: { uuid: 24 },
      lastLogin: { date: true },
      onEarth: { boolean: 'null' },
      diary: {
        first: {
          content: { lorem: 128 },
          author: {
            name: {
              first: { letters: 10 },
              last: { letters: 12 },
              uuid: { uuid: 24 }
            }
          }
        },
        second: {
          content: { lorem: 128 },
          author: {
            name: {
              first: { letters: 10 },
              last: { letters: 12 },
              uuid: { uuid: 24 }
            }
          }
        },
        third: {
          content: { lorem: 128 },
          author: {
            name: {
              first: { letters: 10 },
              last: { letters: 12 },
              uuid: { uuid: 24 }
            }
          }
        },
        notes: [
          { lorem: 18 },
          { numb: 10 },
          { lorem: 26 },
          { numb: 10 },
          { lorem: 32 },
          { numb: 10 },
          { lorem: 40 },
          { numb: 10 }
        ]
      },
      bloodtype: { bloodtype: false }
    }
  }
  const docs = []
  for (let i = 0; i < count; i++) {
    docs.push(make(template, {}))
  }
  return docs
}

module.exports = socuments
