/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

export const examples: any[] = [
  {
    "key": "angular/accordion/async-content",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('accordion')\n  accordionRef!: ElementRef;\n  hidden = true;\n  onPlusExpand(event) {\n    event.preventDefault();\n    this.hidden = false;\n    setTimeout(() => {\n      this.hidden = true;\n      this.accordionRef.nativeElement.open = true;\n    }, 2500);\n  }\n}\n",
    "template": "<plus-accordion summary=\"Summary\" (plus-expand)=\"onPlusExpand($event)\" #accordion>\n  <plus-progress-bar\n    variant=\"indeterminate\"\n    slot=\"top\"\n    style=\"height: 2px\"\n    [hidden]=\"hidden\"\n  ></plus-progress-bar>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/async-content",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\n\n$accordion.addEventListener('plus-expand', (event) => {\n  event.preventDefault();\n  $progress.hidden = false;\n  setTimeout(() => {\n    $progress.hidden = true;\n    $accordion.open = true;\n  }, 2500);\n});\n",
    "template": "<plus-accordion id=\"$accordion\" summary=\"Summary\">\n  <plus-progress-bar\n    id=\"$progress\"\n    variant=\"indeterminate\"\n    slot=\"top\"\n    style=\"height: 2px\"\n    hidden\n  ></plus-progress-bar>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/async-content",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { useEffect, useRef, useState } from 'react';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  const accordionRef = useRef();\n  const [hidden, setHidden] = useState(true);\n  useEffect(() => {\n    if (!accordionRef.current) return;\n    function onPlusExpand(event) {\n      event.preventDefault();\n      setHidden(false);\n      setTimeout(() => {\n        setHidden(true);\n        accordionRef.current.open = true;\n      }, 2500);\n    }\n    accordionRef.current.addEventListener('plus-expand', onPlusExpand);\n    return () => {\n      if (!accordionRef.current) return;\n      accordionRef.current.removeEventListener('plus-expand', onPlusExpand);\n    };\n  });\n  return (\n    <plus-accordion summary=\"Summary\" ref={accordionRef}>\n      <plus-progress-bar\n        variant=\"indeterminate\"\n        slot=\"top\"\n        style={{\n          height: '2px'\n        }}\n        hidden={hidden}\n      ></plus-progress-bar>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/async-content",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { useRef, useState } from 'react';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  const accordionRef = useRef();\n  const [hidden, setHidden] = useState(true);\n  function onPlusExpand(event) {\n    event.preventDefault();\n    setHidden(false);\n    setTimeout(() => {\n      setHidden(true);\n      accordionRef.current.open = true;\n    }, 2500);\n  }\n  return (\n    <plus-accordion summary=\"Summary\" onplus-expand={onPlusExpand} ref={accordionRef}>\n      <plus-progress-bar\n        variant=\"indeterminate\"\n        slot=\"top\"\n        style={{\n          height: '2px'\n        }}\n        hidden={hidden}\n      ></plus-progress-bar>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/async-content",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\n\nlet accordionRef;\nlet hidden = true;\nfunction onPlusExpand(event) {\n  event.preventDefault();\n  hidden = false;\n  setTimeout(() => {\n    hidden = true;\n    accordionRef.open = true;\n  }, 2500);\n}\n",
    "template": "<plus-accordion summary=\"Summary\" on:plus-expand={onPlusExpand} bind:this={accordionRef}>\n  <plus-progress-bar variant=\"indeterminate\" slot=\"top\" style=\"height: 2px;\" {hidden}\n  ></plus-progress-bar>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/async-content",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\n\nconst accordionRef = ref();\nconst hidden = ref(true);\nfunction onPlusExpand(event) {\n  event.preventDefault();\n  hidden.value = false;\n  setTimeout(() => {\n    hidden.value = true;\n    accordionRef.value.open = true;\n  }, 2500);\n}\n",
    "template": "<plus-accordion summary=\"Summary\" @plus-expand=\"onPlusExpand\" ref=\"accordionRef\">\n  <plus-progress-bar\n    variant=\"indeterminate\"\n    slot=\"top\"\n    style=\"height: 2px\"\n    :hidden=\"hidden\"\n  ></plus-progress-bar>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "angular/accordion/custom-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-accordion summary=\"First\">\n  <plus-icon slot=\"icon-expand\" name=\"plus\"></plus-icon>\n  <plus-icon slot=\"icon-collapse\" name=\"dash\"></plus-icon>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/custom-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-accordion summary=\"First\">\n  <plus-icon slot=\"icon-expand\" name=\"plus\"></plus-icon>\n  <plus-icon slot=\"icon-collapse\" name=\"dash\"></plus-icon>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/custom-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-accordion summary=\"First\">\n      <plus-icon slot=\"icon-expand\" name=\"plus\"></plus-icon>\n      <plus-icon slot=\"icon-collapse\" name=\"dash\"></plus-icon>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/custom-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-accordion summary=\"First\">\n      <plus-icon slot=\"icon-expand\" name=\"plus\"></plus-icon>\n      <plus-icon slot=\"icon-collapse\" name=\"dash\"></plus-icon>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/custom-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-accordion summary=\"First\">\n  <plus-icon slot=\"icon-expand\" name=\"plus\"></plus-icon>\n  <plus-icon slot=\"icon-collapse\" name=\"dash\"></plus-icon>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/custom-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-accordion summary=\"First\">\n  <plus-icon slot=\"icon-expand\" name=\"plus\"></plus-icon>\n  <plus-icon slot=\"icon-collapse\" name=\"dash\"></plus-icon>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "angular/accordion/custom-summary-template",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-stack[slot='summary'] {\n  flex-grow: 1;\n  margin-inline-end: 1rem;\n}\n",
    "template": "<plus-accordion>\n  <plus-stack slot=\"summary\" justify-content=\"space-between\">\n    <b>Summary</b>\n    <button>Action</button>\n  </plus-stack>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/custom-summary-template",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-stack[slot='summary'] {\n  flex-grow: 1;\n  margin-inline-end: 1rem;\n}\n",
    "template": "<plus-accordion>\n  <plus-stack slot=\"summary\" justify-content=\"space-between\">\n    <b>Summary</b>\n    <button>Action</button>\n  </plus-stack>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/custom-summary-template",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-accordion>\n      <plus-stack slot=\"summary\" justify-content=\"space-between\">\n        <b>Summary</b>\n        <button>Action</button>\n      </plus-stack>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n",
    "style": "plus-stack[slot='summary'] {\n  flex-grow: 1;\n  margin-inline-end: 1rem;\n}\n"
  },
  {
    "key": "react-experimental/accordion/custom-summary-template",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-accordion>\n      <plus-stack slot=\"summary\" justify-content=\"space-between\">\n        <b>Summary</b>\n        <button>Action</button>\n      </plus-stack>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n",
    "style": "plus-stack[slot='summary'] {\n  flex-grow: 1;\n  margin-inline-end: 1rem;\n}\n"
  },
  {
    "key": "svelte/accordion/custom-summary-template",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-stack[slot='summary'] {\n  flex-grow: 1;\n  margin-inline-end: 1rem;\n}\n",
    "template": "<plus-accordion>\n  <plus-stack slot=\"summary\" justify-content=\"space-between\">\n    <b>Summary</b>\n    <button>Action</button>\n  </plus-stack>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/custom-summary-template",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-stack[slot='summary'] {\n  flex-grow: 1;\n  margin-inline-end: 1rem;\n}\n",
    "template": "<plus-accordion>\n  <plus-stack slot=\"summary\" justify-content=\"space-between\">\n    <b>Summary</b>\n    <button>Action</button>\n  </plus-stack>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "angular/accordion/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-accordion {\n  border: 2px solid whitesmoke;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\nplus-accordion:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\nplus-accordion::part(body),\nplus-accordion::part(svg) {\n  transition: all 0.5s ease-out;\n}\nplus-accordion::part(header) {\n  column-gap: 0.5rem;\n  flex-direction: row-reverse;\n  padding: 0.75rem;\n}\nplus-accordion[state^='expand']::part(header) {\n  font-weight: bold;\n}\nplus-accordion[state^='expand']::part(svg) {\n  fill: gray;\n  transform: rotate(90deg);\n}\nplus-accordion[state^='collap']::part(svg) {\n  fill: gray;\n  transform: rotate(0deg);\n}\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "javascript/accordion/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-accordion {\n  border: 2px solid whitesmoke;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\nplus-accordion:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\nplus-accordion::part(body),\nplus-accordion::part(svg) {\n  transition: all 0.5s ease-out;\n}\nplus-accordion::part(header) {\n  column-gap: 0.5rem;\n  flex-direction: row-reverse;\n  padding: 0.75rem;\n}\nplus-accordion[state^='expand']::part(header) {\n  font-weight: bold;\n}\nplus-accordion[state^='expand']::part(svg) {\n  fill: gray;\n  transform: rotate(90deg);\n}\nplus-accordion[state^='collap']::part(svg) {\n  fill: gray;\n  transform: rotate(0deg);\n}\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "react/accordion/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordions>\n      <plus-accordion summary=\"First\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Second\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Third\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </plus-accordions>\n  );\n}\nexport default App;\n",
    "style": "plus-accordion {\n  border: 2px solid whitesmoke;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\nplus-accordion:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\nplus-accordion::part(body),\nplus-accordion::part(svg) {\n  transition: all 0.5s ease-out;\n}\nplus-accordion::part(header) {\n  column-gap: 0.5rem;\n  flex-direction: row-reverse;\n  padding: 0.75rem;\n}\nplus-accordion[state^='expand']::part(header) {\n  font-weight: bold;\n}\nplus-accordion[state^='expand']::part(svg) {\n  fill: gray;\n  transform: rotate(90deg);\n}\nplus-accordion[state^='collap']::part(svg) {\n  fill: gray;\n  transform: rotate(0deg);\n}\n"
  },
  {
    "key": "react-experimental/accordion/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordions>\n      <plus-accordion summary=\"First\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Second\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Third\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </plus-accordions>\n  );\n}\nexport default App;\n",
    "style": "plus-accordion {\n  border: 2px solid whitesmoke;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\nplus-accordion:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\nplus-accordion::part(body),\nplus-accordion::part(svg) {\n  transition: all 0.5s ease-out;\n}\nplus-accordion::part(header) {\n  column-gap: 0.5rem;\n  flex-direction: row-reverse;\n  padding: 0.75rem;\n}\nplus-accordion[state^='expand']::part(header) {\n  font-weight: bold;\n}\nplus-accordion[state^='expand']::part(svg) {\n  fill: gray;\n  transform: rotate(90deg);\n}\nplus-accordion[state^='collap']::part(svg) {\n  fill: gray;\n  transform: rotate(0deg);\n}\n"
  },
  {
    "key": "svelte/accordion/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-accordion {\n  border: 2px solid whitesmoke;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\nplus-accordion:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\nplus-accordion::part(body),\nplus-accordion::part(svg) {\n  transition: all 0.5s ease-out;\n}\nplus-accordion::part(header) {\n  column-gap: 0.5rem;\n  flex-direction: row-reverse;\n  padding: 0.75rem;\n}\nplus-accordion[state^='expand']::part(header) {\n  font-weight: bold;\n}\nplus-accordion[state^='expand']::part(svg) {\n  fill: gray;\n  transform: rotate(90deg);\n}\nplus-accordion[state^='collap']::part(svg) {\n  fill: gray;\n  transform: rotate(0deg);\n}\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "vue/accordion/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-accordion {\n  border: 2px solid whitesmoke;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\nplus-accordion:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\nplus-accordion::part(body),\nplus-accordion::part(svg) {\n  transition: all 0.5s ease-out;\n}\nplus-accordion::part(header) {\n  column-gap: 0.5rem;\n  flex-direction: row-reverse;\n  padding: 0.75rem;\n}\nplus-accordion[state^='expand']::part(header) {\n  font-weight: bold;\n}\nplus-accordion[state^='expand']::part(svg) {\n  fill: gray;\n  transform: rotate(90deg);\n}\nplus-accordion[state^='collap']::part(svg) {\n  fill: gray;\n  transform: rotate(0deg);\n}\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "angular/accordion/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-accordion summary=\"Summary\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordion summary=\"Summary\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordion summary=\"Summary\">\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordion summary=\"Summary\">\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordion summary=\"Summary\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordion summary=\"Summary\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "angular/accordion/disabled",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\" disabled>\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "javascript/accordion/disabled",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\" disabled>\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "react/accordion/disabled",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordions>\n      <plus-accordion summary=\"First\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Second\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Third\" disabled>\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </plus-accordions>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/disabled",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordions>\n      <plus-accordion summary=\"First\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Second\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Third\" disabled>\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </plus-accordions>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/disabled",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\" disabled>\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "vue/accordion/disabled",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordions>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\" disabled>\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "angular/accordion/methods",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('accordion')\n  accordionRef!: ElementRef;\n  onClick1() {\n    this.accordionRef.nativeElement.collapse();\n  }\n  onClick2() {\n    this.accordionRef.nativeElement.expand();\n  }\n  onClick3() {\n    this.accordionRef.nativeElement.toggle();\n  }\n}\n",
    "template": "<plus-stack gap=\"1rem\">\n  <button (click)=\"onClick1()\">Collapse</button>\n  <button (click)=\"onClick2()\">Expand</button>\n  <button (click)=\"onClick3()\">Toggle</button>\n</plus-stack>\n<br />\n<plus-accordion summary=\"Summary\" #accordion>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/methods",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\n$collapse.addEventListener('click', () => {\n  $accordion.collapse();\n});\n$expand.addEventListener('click', () => {\n  $accordion.expand();\n});\n$toggle.addEventListener('click', () => {\n  $accordion.toggle();\n});\n",
    "template": "<plus-stack gap=\"1rem\">\n  <button id=\"$collapse\">Collapse</button>\n  <button id=\"$expand\">Expand</button>\n  <button id=\"$toggle\">Toggle</button>\n</plus-stack>\n<br />\n<plus-accordion id=\"$accordion\" summary=\"Summary\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/methods",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  const accordionRef = useRef();\n  function onClick1() {\n    accordionRef.current.collapse();\n  }\n  function onClick2() {\n    accordionRef.current.expand();\n  }\n  function onClick3() {\n    accordionRef.current.toggle();\n  }\n  return (\n    <>\n      <plus-stack gap=\"1rem\">\n        <button onClick={onClick1}>Collapse</button>\n        <button onClick={onClick2}>Expand</button>\n        <button onClick={onClick3}>Toggle</button>\n      </plus-stack>\n      <br />\n      <plus-accordion summary=\"Summary\" ref={accordionRef}>\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/methods",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  const accordionRef = useRef();\n  function onClick1() {\n    accordionRef.current.collapse();\n  }\n  function onClick2() {\n    accordionRef.current.expand();\n  }\n  function onClick3() {\n    accordionRef.current.toggle();\n  }\n  return (\n    <>\n      <plus-stack gap=\"1rem\">\n        <button onclick={onClick1}>Collapse</button>\n        <button onclick={onClick2}>Expand</button>\n        <button onclick={onClick3}>Toggle</button>\n      </plus-stack>\n      <br />\n      <plus-accordion summary=\"Summary\" ref={accordionRef}>\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/methods",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nlet accordionRef;\nfunction onClick1() {\n  accordionRef.collapse();\n}\nfunction onClick2() {\n  accordionRef.expand();\n}\nfunction onClick3() {\n  accordionRef.toggle();\n}\n",
    "template": "<plus-stack gap=\"1rem\">\n  <button on:click={onClick1}>Collapse</button>\n  <button on:click={onClick2}>Expand</button>\n  <button on:click={onClick3}>Toggle</button>\n</plus-stack>\n<br />\n<plus-accordion summary=\"Summary\" bind:this={accordionRef}>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/methods",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nconst accordionRef = ref();\nfunction onClick1() {\n  accordionRef.value.collapse();\n}\nfunction onClick2() {\n  accordionRef.value.expand();\n}\nfunction onClick3() {\n  accordionRef.value.toggle();\n}\n",
    "template": "<div>\n  <plus-stack gap=\"1rem\">\n    <button @click=\"onClick1\">Collapse</button>\n    <button @click=\"onClick2\">Expand</button>\n    <button @click=\"onClick3\">Toggle</button>\n  </plus-stack>\n  <br />\n  <plus-accordion summary=\"Summary\" ref=\"accordionRef\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</div>\n"
  },
  {
    "key": "angular/accordion/open",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/open",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/open",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordion summary=\"Summary\" open>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/open",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordion summary=\"Summary\" open>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/open",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/open",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "angular/accordion/persistent",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-accordions persistent>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "javascript/accordion/persistent",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordions persistent>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "react/accordion/persistent",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordions persistent>\n      <plus-accordion summary=\"First\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Second\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Third\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </plus-accordions>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/persistent",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-accordions persistent>\n      <plus-accordion summary=\"First\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Second\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n      <plus-accordion summary=\"Third\">\n        <plus-faker></plus-faker>\n      </plus-accordion>\n    </plus-accordions>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/persistent",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordions persistent>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "vue/accordion/persistent",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/accordions.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-accordions persistent>\n  <plus-accordion summary=\"First\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Second\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n  <plus-accordion summary=\"Third\">\n    <plus-faker></plus-faker>\n  </plus-accordion>\n</plus-accordions>\n"
  },
  {
    "key": "angular/accordion/prevent-from-toggling",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusCollapse(event) {\n    if (confirm('Are you sure you want to collapse it?')) return;\n    event.preventDefault();\n  }\n  onPlusExpand(event) {\n    if (confirm('Are you sure you want to expand it?')) return;\n    event.preventDefault();\n  }\n}\n",
    "template": "<plus-accordion\n  summary=\"Summary\"\n  (plus-collapse)=\"onPlusCollapse($event)\"\n  (plus-expand)=\"onPlusExpand($event)\"\n>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/prevent-from-toggling",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\n$accordion.addEventListener('plus-collapse', (event) => {\n  if (confirm('Are you sure you want to collapse it?')) return;\n  event.preventDefault();\n});\n$accordion.addEventListener('plus-expand', (event) => {\n  if (confirm('Are you sure you want to expand it?')) return;\n  event.preventDefault();\n});\n",
    "template": "<plus-accordion summary=\"Summary\" id=\"$accordion\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/prevent-from-toggling",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  const accordionRef = useRef();\n  useEffect(() => {\n    if (!accordionRef.current) return;\n    function onPlusCollapse(event) {\n      if (confirm('Are you sure you want to collapse it?')) return;\n      event.preventDefault();\n    }\n    accordionRef.current.addEventListener('plus-collapse', onPlusCollapse);\n    return () => {\n      if (!accordionRef.current) return;\n      accordionRef.current.removeEventListener('plus-collapse', onPlusCollapse);\n    };\n  });\n  useEffect(() => {\n    if (!accordionRef.current) return;\n    function onPlusExpand(event) {\n      if (confirm('Are you sure you want to expand it?')) return;\n      event.preventDefault();\n    }\n    accordionRef.current.addEventListener('plus-expand', onPlusExpand);\n    return () => {\n      if (!accordionRef.current) return;\n      accordionRef.current.removeEventListener('plus-expand', onPlusExpand);\n    };\n  });\n  return (\n    <plus-accordion summary=\"Summary\" ref={accordionRef}>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/prevent-from-toggling",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  function onPlusCollapse(event) {\n    if (confirm('Are you sure you want to collapse it?')) return;\n    event.preventDefault();\n  }\n  function onPlusExpand(event) {\n    if (confirm('Are you sure you want to expand it?')) return;\n    event.preventDefault();\n  }\n  return (\n    <plus-accordion summary=\"Summary\" onplus-collapse={onPlusCollapse} onplus-expand={onPlusExpand}>\n      <plus-faker></plus-faker>\n    </plus-accordion>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/prevent-from-toggling",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction onPlusCollapse(event) {\n  if (confirm('Are you sure you want to collapse it?')) return;\n  event.preventDefault();\n}\nfunction onPlusExpand(event) {\n  if (confirm('Are you sure you want to expand it?')) return;\n  event.preventDefault();\n}\n",
    "template": "<plus-accordion summary=\"Summary\" on:plus-collapse={onPlusCollapse} on:plus-expand={onPlusExpand}>\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/prevent-from-toggling",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction onPlusCollapse(event) {\n  if (confirm('Are you sure you want to collapse it?')) return;\n  event.preventDefault();\n}\nfunction onPlusExpand(event) {\n  if (confirm('Are you sure you want to expand it?')) return;\n  event.preventDefault();\n}\n",
    "template": "<plus-accordion summary=\"Summary\" @plus-collapse=\"onPlusCollapse\" @plus-expand=\"onPlusExpand\">\n  <plus-faker></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "angular/accordion/slots",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"top\"></plus-progress-bar>\n  <plus-faker [seed]=\"0\"></plus-faker>\n</plus-accordion>\n<br />\n<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"middle\"></plus-progress-bar>\n  <plus-faker [seed]=\"0\"></plus-faker>\n</plus-accordion>\n<br />\n<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"bottom\"></plus-progress-bar>\n  <plus-faker [seed]=\"0\"></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "javascript/accordion/slots",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"top\"></plus-progress-bar>\n  <plus-faker seed=\"0\"></plus-faker>\n</plus-accordion>\n<br />\n<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"middle\"></plus-progress-bar>\n  <plus-faker seed=\"0\"></plus-faker>\n</plus-accordion>\n<br />\n<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"bottom\"></plus-progress-bar>\n  <plus-faker seed=\"0\"></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "react/accordion/slots",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-accordion summary=\"Summary\" open>\n        <plus-progress-bar\n          variant=\"indeterminate\"\n          style={{\n            height: '2px'\n          }}\n          slot=\"top\"\n        ></plus-progress-bar>\n        <plus-faker seed={0}></plus-faker>\n      </plus-accordion>\n      <br />\n      <plus-accordion summary=\"Summary\" open>\n        <plus-progress-bar\n          variant=\"indeterminate\"\n          style={{\n            height: '2px'\n          }}\n          slot=\"middle\"\n        ></plus-progress-bar>\n        <plus-faker seed={0}></plus-faker>\n      </plus-accordion>\n      <br />\n      <plus-accordion summary=\"Summary\" open>\n        <plus-progress-bar\n          variant=\"indeterminate\"\n          style={{\n            height: '2px'\n          }}\n          slot=\"bottom\"\n        ></plus-progress-bar>\n        <plus-faker seed={0}></plus-faker>\n      </plus-accordion>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/accordion/slots",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-accordion summary=\"Summary\" open>\n        <plus-progress-bar\n          variant=\"indeterminate\"\n          style={{\n            height: '2px'\n          }}\n          slot=\"top\"\n        ></plus-progress-bar>\n        <plus-faker seed={0}></plus-faker>\n      </plus-accordion>\n      <br />\n      <plus-accordion summary=\"Summary\" open>\n        <plus-progress-bar\n          variant=\"indeterminate\"\n          style={{\n            height: '2px'\n          }}\n          slot=\"middle\"\n        ></plus-progress-bar>\n        <plus-faker seed={0}></plus-faker>\n      </plus-accordion>\n      <br />\n      <plus-accordion summary=\"Summary\" open>\n        <plus-progress-bar\n          variant=\"indeterminate\"\n          style={{\n            height: '2px'\n          }}\n          slot=\"bottom\"\n        ></plus-progress-bar>\n        <plus-faker seed={0}></plus-faker>\n      </plus-accordion>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/accordion/slots",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px;\" slot=\"top\"></plus-progress-bar>\n  <plus-faker seed={0}></plus-faker>\n</plus-accordion>\n<br />\n<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px;\" slot=\"middle\"></plus-progress-bar>\n  <plus-faker seed={0}></plus-faker>\n</plus-accordion>\n<br />\n<plus-accordion summary=\"Summary\" open>\n  <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px;\" slot=\"bottom\"></plus-progress-bar>\n  <plus-faker seed={0}></plus-faker>\n</plus-accordion>\n"
  },
  {
    "key": "vue/accordion/slots",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/accordion.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<div>\n  <plus-accordion summary=\"Summary\" open>\n    <plus-progress-bar variant=\"indeterminate\" style=\"height: 2px\" slot=\"top\"></plus-progress-bar>\n    <plus-faker :seed=\"0\"></plus-faker>\n  </plus-accordion>\n  <br />\n  <plus-accordion summary=\"Summary\" open>\n    <plus-progress-bar\n      variant=\"indeterminate\"\n      style=\"height: 2px\"\n      slot=\"middle\"\n    ></plus-progress-bar>\n    <plus-faker :seed=\"0\"></plus-faker>\n  </plus-accordion>\n  <br />\n  <plus-accordion summary=\"Summary\" open>\n    <plus-progress-bar\n      variant=\"indeterminate\"\n      style=\"height: 2px\"\n      slot=\"bottom\"\n    ></plus-progress-bar>\n    <plus-faker :seed=\"0\"></plus-faker>\n  </plus-accordion>\n</div>\n"
  },
  {
    "key": "angular/animation/button",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('animation')\n  animationRef!: ElementRef;\n  onClick() {\n    this.animationRef.nativeElement.run = true;\n  }\n}\n",
    "style": "plus-animation {\n  display: inline-block;\n}\n",
    "template": "<plus-center>\n  <plus-animation name=\"tada\" #animation>\n    <button (click)=\"onClick()\">Click Me</button>\n  </plus-animation>\n</plus-center>\n"
  },
  {
    "key": "javascript/animation/button",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/center.js';\n\n$button.addEventListener('click', () => {\n  $animation.run = true;\n});\n",
    "style": "plus-animation {\n  display: inline-block;\n}\n",
    "template": "<plus-center>\n  <plus-animation id=\"$animation\" name=\"tada\">\n    <button id=\"$button\">Click Me</button>\n  </plus-animation>\n</plus-center>\n"
  },
  {
    "key": "react/animation/button",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const animationRef = useRef();\n  function onClick() {\n    animationRef.current.run = true;\n  }\n  return (\n    <plus-center>\n      <plus-animation name=\"tada\" ref={animationRef}>\n        <button onClick={onClick}>Click Me</button>\n      </plus-animation>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  display: inline-block;\n}\n"
  },
  {
    "key": "react-experimental/animation/button",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const animationRef = useRef();\n  function onClick() {\n    animationRef.current.run = true;\n  }\n  return (\n    <plus-center>\n      <plus-animation name=\"tada\" ref={animationRef}>\n        <button onclick={onClick}>Click Me</button>\n      </plus-animation>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  display: inline-block;\n}\n"
  },
  {
    "key": "svelte/animation/button",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/center.js';\n\nlet animationRef;\nfunction onClick() {\n  animationRef.run = true;\n}\n",
    "style": "plus-animation {\n  display: inline-block;\n}\n",
    "template": "<plus-center>\n  <plus-animation name=\"tada\" bind:this={animationRef}>\n    <button on:click={onClick}>Click Me</button>\n  </plus-animation>\n</plus-center>\n"
  },
  {
    "key": "vue/animation/button",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/center.js';\n\nconst animationRef = ref();\nfunction onClick() {\n  animationRef.value.run = true;\n}\n",
    "style": "plus-animation {\n  display: inline-block;\n}\n",
    "template": "<plus-center>\n  <plus-animation name=\"tada\" ref=\"animationRef\">\n    <button @click=\"onClick\">Click Me</button>\n  </plus-animation>\n</plus-center>\n"
  },
  {
    "key": "angular/animation/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation [iterations]=\"Infinity\" name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "javascript/animation/default",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation iterations=\"Infinity\" name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "react/animation/default",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-animation iterations={Infinity} name=\"fade-in\" run></plus-animation>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n"
  },
  {
    "key": "react-experimental/animation/default",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-animation iterations={Infinity} name=\"fade-in\" run></plus-animation>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n"
  },
  {
    "key": "svelte/animation/default",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation iterations={Infinity} name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "vue/animation/default",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation :iterations=\"Infinity\" name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "angular/animation/duration",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation [duration]=\"2500\" [iterations]=\"Infinity\" name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "javascript/animation/duration",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation duration=\"2500\" iterations=\"Infinity\" name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "react/animation/duration",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-animation duration={2500} iterations={Infinity} name=\"fade-in\" run></plus-animation>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n"
  },
  {
    "key": "react-experimental/animation/duration",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-animation duration={2500} iterations={Infinity} name=\"fade-in\" run></plus-animation>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n"
  },
  {
    "key": "svelte/animation/duration",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation duration={2500} iterations={Infinity} name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "vue/animation/duration",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation :duration=\"2500\" :iterations=\"Infinity\" name=\"fade-in\" run></plus-animation>\n</plus-center>\n"
  },
  {
    "key": "angular/animation/easing",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation\n      easing=\"linear\"\n      [iterations]=\"Infinity\"\n      name=\"fade-out-down\"\n      run\n    ></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation\n      easing=\"ease-in\"\n      [iterations]=\"Infinity\"\n      name=\"fade-out-down\"\n      run\n    ></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation\n      easing=\"cubic-bezier(0.25, 0.50, 0.25, 0.50)\"\n      [iterations]=\"Infinity\"\n      name=\"fade-out-down\"\n      run\n    ></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n<br />\n<br />\n<br />\n"
  },
  {
    "key": "javascript/animation/easing",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation easing=\"linear\" iterations=\"Infinity\" name=\"fade-out-down\" run></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation\n      easing=\"ease-in\"\n      iterations=\"Infinity\"\n      name=\"fade-out-down\"\n      run\n    ></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation\n      easing=\"cubic-bezier(0.25, 0.50, 0.25, 0.50)\"\n      iterations=\"Infinity\"\n      name=\"fade-out-down\"\n      run\n    ></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n<br />\n<br />\n<br />\n"
  },
  {
    "key": "react/animation/easing",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-grid justify-content=\"evenly\" gutter=\"md\">\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-animation\n            easing=\"linear\"\n            iterations={Infinity}\n            name=\"fade-out-down\"\n            run\n          ></plus-animation>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-animation\n            easing=\"ease-in\"\n            iterations={Infinity}\n            name=\"fade-out-down\"\n            run\n          ></plus-animation>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-animation\n            easing=\"cubic-bezier(0.25, 0.50, 0.25, 0.50)\"\n            iterations={Infinity}\n            name=\"fade-out-down\"\n            run\n          ></plus-animation>\n        </plus-grid-item>\n      </plus-grid>\n      <br />\n      <br />\n      <br />\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/animation/easing",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-grid justify-content=\"evenly\" gutter=\"md\">\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-animation\n            easing=\"linear\"\n            iterations={Infinity}\n            name=\"fade-out-down\"\n            run\n          ></plus-animation>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-animation\n            easing=\"ease-in\"\n            iterations={Infinity}\n            name=\"fade-out-down\"\n            run\n          ></plus-animation>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-animation\n            easing=\"cubic-bezier(0.25, 0.50, 0.25, 0.50)\"\n            iterations={Infinity}\n            name=\"fade-out-down\"\n            run\n          ></plus-animation>\n        </plus-grid-item>\n      </plus-grid>\n      <br />\n      <br />\n      <br />\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/animation/easing",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation easing=\"linear\" iterations={Infinity} name=\"fade-out-down\" run></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation easing=\"ease-in\" iterations={Infinity} name=\"fade-out-down\" run\n    ></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation\n      easing=\"cubic-bezier(0.25, 0.50, 0.25, 0.50)\"\n      iterations={Infinity}\n      name=\"fade-out-down\"\n      run\n    ></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n<br />\n<br />\n<br />\n"
  },
  {
    "key": "vue/animation/easing",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<div>\n  <plus-grid justify-content=\"evenly\" gutter=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-animation\n        easing=\"linear\"\n        :iterations=\"Infinity\"\n        name=\"fade-out-down\"\n        run\n      ></plus-animation>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-animation\n        easing=\"ease-in\"\n        :iterations=\"Infinity\"\n        name=\"fade-out-down\"\n        run\n      ></plus-animation>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-animation\n        easing=\"cubic-bezier(0.25, 0.50, 0.25, 0.50)\"\n        :iterations=\"Infinity\"\n        name=\"fade-out-down\"\n        run\n      ></plus-animation>\n    </plus-grid-item>\n  </plus-grid>\n  <br />\n  <br />\n  <br />\n</div>\n"
  },
  {
    "key": "angular/animation/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';\nimport '@htmlplus/ui/intersection.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('animation')\n  animationRef!: ElementRef;\n  onPlusChange(event) {\n    this.animationRef.nativeElement.run = event.detail.isIntersecting;\n  }\n}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 1000px auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection (plus-change)=\"onPlusChange($event)\">\n    <plus-animation name=\"heart-beat\" #animation></plus-animation>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "javascript/animation/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';\nimport '@htmlplus/ui/intersection.js';\n\n$intersection.addEventListener('plus-change', (event) => {\n  $animation.run = event.detail.isIntersecting;\n});\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 1000px auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection id=\"$intersection\">\n    <plus-animation id=\"$animation\" name=\"heart-beat\"></plus-animation>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "react/animation/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';\nimport '@htmlplus/ui/intersection.js';\n\nfunction App() {\n  const animationRef = useRef();\n  const intersectionRef = useRef();\n  useEffect(() => {\n    if (!intersectionRef.current) return;\n    function onPlusChange(event) {\n      animationRef.current.run = event.detail.isIntersecting;\n    }\n    intersectionRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!intersectionRef.current) return;\n      intersectionRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <div className=\"container\">\n      <plus-intersection ref={intersectionRef}>\n        <plus-animation name=\"heart-beat\" ref={animationRef}></plus-animation>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 1000px auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n"
  },
  {
    "key": "react-experimental/animation/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';\nimport '@htmlplus/ui/intersection.js';\n\nfunction App() {\n  const animationRef = useRef();\n  function onPlusChange(event) {\n    animationRef.current.run = event.detail.isIntersecting;\n  }\n  return (\n    <div className=\"container\">\n      <plus-intersection onplus-change={onPlusChange}>\n        <plus-animation name=\"heart-beat\" ref={animationRef}></plus-animation>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 1000px auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n"
  },
  {
    "key": "svelte/animation/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';\nimport '@htmlplus/ui/intersection.js';\n\nlet animationRef;\nfunction onPlusChange(event) {\n  animationRef.run = event.detail.isIntersecting;\n}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 1000px auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection on:plus-change={onPlusChange}>\n    <plus-animation name=\"heart-beat\" bind:this={animationRef}></plus-animation>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "vue/animation/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';\nimport '@htmlplus/ui/intersection.js';\n\nconst animationRef = ref();\nfunction onPlusChange(event) {\n  animationRef.value.run = event.detail.isIntersecting;\n}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 1000px auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection @plus-change=\"onPlusChange\">\n    <plus-animation name=\"heart-beat\" ref=\"animationRef\"></plus-animation>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "angular/animation/keyframes",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  keyframes = [\n    {\n      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',\n      opacity: '1'\n    },\n    {\n      transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',\n      opacity: '0'\n    }\n  ];\n}\n",
    "style": ".root {\n  padding: 5rem 0;\n  position: relative;\n}\nplus-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border: solid 1px red;\n  transform-origin: top left;\n}\n",
    "template": "<div class=\"root\">\n  <plus-animation\n    [duration]=\"5000\"\n    [iterations]=\"Infinity\"\n    run\n    [keyframes]=\"keyframes\"\n  ></plus-animation>\n</div>\n"
  },
  {
    "key": "javascript/animation/keyframes",
    "script": "import '@htmlplus/ui/animation.js';\n\n$animation.keyframes = [\n  {\n    transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',\n    opacity: '1'\n  },\n  {\n    transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',\n    opacity: '0'\n  }\n];\n",
    "style": ".root {\n  padding: 5rem 0;\n  position: relative;\n}\nplus-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border: solid 1px red;\n  transform-origin: top left;\n}\n",
    "template": "<div class=\"root\">\n  <plus-animation duration=\"5000\" id=\"$animation\" iterations=\"Infinity\" run></plus-animation>\n</div>\n"
  },
  {
    "key": "react/animation/keyframes",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\n\nfunction App() {\n  const animationRef = useRef();\n  useEffect(() => {\n    animationRef.current.keyframes = [\n      {\n        transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',\n        opacity: '1'\n      },\n      {\n        transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',\n        opacity: '0'\n      }\n    ];\n  }, []);\n  return (\n    <div className=\"root\">\n      <plus-animation duration={5000} iterations={Infinity} run ref={animationRef}></plus-animation>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".root {\n  padding: 5rem 0;\n  position: relative;\n}\nplus-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border: solid 1px red;\n  transform-origin: top left;\n}\n"
  },
  {
    "key": "react-experimental/animation/keyframes",
    "script": "import '@htmlplus/ui/animation.js';\n\nfunction App() {\n  const keyframes = [\n    {\n      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',\n      opacity: '1'\n    },\n    {\n      transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',\n      opacity: '0'\n    }\n  ];\n  return (\n    <div className=\"root\">\n      <plus-animation\n        duration={5000}\n        iterations={Infinity}\n        run\n        keyframes={keyframes}\n      ></plus-animation>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".root {\n  padding: 5rem 0;\n  position: relative;\n}\nplus-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border: solid 1px red;\n  transform-origin: top left;\n}\n"
  },
  {
    "key": "svelte/animation/keyframes",
    "script": "import '@htmlplus/ui/animation.js';\n\nconst keyframes = [\n  {\n    transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',\n    opacity: '1'\n  },\n  {\n    transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',\n    opacity: '0'\n  }\n];\n",
    "style": ".root {\n  padding: 5rem 0;\n  position: relative;\n}\nplus-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border: solid 1px red;\n  transform-origin: top left;\n}\n",
    "template": "<div class=\"root\">\n  <plus-animation duration={5000} iterations={Infinity} run {keyframes}></plus-animation>\n</div>\n"
  },
  {
    "key": "vue/animation/keyframes",
    "script": "import '@htmlplus/ui/animation.js';\n\nconst keyframes = [\n  {\n    transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',\n    opacity: '1'\n  },\n  {\n    transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',\n    opacity: '0'\n  }\n];\n",
    "style": ".root {\n  padding: 5rem 0;\n  position: relative;\n}\nplus-animation {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1rem;\n  height: 1rem;\n  border: solid 1px red;\n  transform-origin: top left;\n}\n",
    "template": "<div class=\"root\">\n  <plus-animation\n    :duration=\"5000\"\n    :iterations=\"Infinity\"\n    run\n    :keyframes=\"keyframes\"\n  ></plus-animation>\n</div>\n"
  },
  {
    "key": "angular/animation/methods",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('animation')\n  animationRef!: ElementRef;\n  onClick1() {\n    this.animationRef.nativeElement.cancel();\n  }\n  onClick2() {\n    this.animationRef.nativeElement.finish();\n  }\n  onClick3() {\n    this.animationRef.nativeElement.pause();\n  }\n  onClick4() {\n    this.animationRef.nativeElement.play();\n  }\n}\n",
    "style": "button {\n  margin: 0 0.5rem;\n}\nplus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation [iterations]=\"3\" name=\"fade-out\" #animation></plus-animation>\n</plus-center>\n<br />\n<plus-center>\n  <button (click)=\"onClick1()\">Cancel</button>\n  <button (click)=\"onClick2()\">Finish</button>\n  <button (click)=\"onClick3()\">Pause</button>\n  <button (click)=\"onClick4()\">Play</button>\n</plus-center>\n"
  },
  {
    "key": "javascript/animation/methods",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\n$cancel.addEventListener('click', () => {\n  $animation.cancel();\n});\n$finish.addEventListener('click', () => {\n  $animation.finish();\n});\n$pause.addEventListener('click', () => {\n  $animation.pause();\n});\n$play.addEventListener('click', () => {\n  $animation.play();\n});\n",
    "style": "button {\n  margin: 0 0.5rem;\n}\nplus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation id=\"$animation\" iterations=\"3\" name=\"fade-out\"></plus-animation>\n</plus-center>\n<br />\n<plus-center>\n  <button id=\"$cancel\">Cancel</button>\n  <button id=\"$finish\">Finish</button>\n  <button id=\"$pause\">Pause</button>\n  <button id=\"$play\">Play</button>\n</plus-center>\n"
  },
  {
    "key": "react/animation/methods",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const animationRef = useRef();\n  function onClick1() {\n    animationRef.current.cancel();\n  }\n  function onClick2() {\n    animationRef.current.finish();\n  }\n  function onClick3() {\n    animationRef.current.pause();\n  }\n  function onClick4() {\n    animationRef.current.play();\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-animation iterations={3} name=\"fade-out\" ref={animationRef}></plus-animation>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onClick={onClick1}>Cancel</button>\n        <button onClick={onClick2}>Finish</button>\n        <button onClick={onClick3}>Pause</button>\n        <button onClick={onClick4}>Play</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n",
    "style": "button {\n  margin: 0 0.5rem;\n}\nplus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n"
  },
  {
    "key": "react-experimental/animation/methods",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const animationRef = useRef();\n  function onClick1() {\n    animationRef.current.cancel();\n  }\n  function onClick2() {\n    animationRef.current.finish();\n  }\n  function onClick3() {\n    animationRef.current.pause();\n  }\n  function onClick4() {\n    animationRef.current.play();\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-animation iterations={3} name=\"fade-out\" ref={animationRef}></plus-animation>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onclick={onClick1}>Cancel</button>\n        <button onclick={onClick2}>Finish</button>\n        <button onclick={onClick3}>Pause</button>\n        <button onclick={onClick4}>Play</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n",
    "style": "button {\n  margin: 0 0.5rem;\n}\nplus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n"
  },
  {
    "key": "svelte/animation/methods",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nlet animationRef;\nfunction onClick1() {\n  animationRef.cancel();\n}\nfunction onClick2() {\n  animationRef.finish();\n}\nfunction onClick3() {\n  animationRef.pause();\n}\nfunction onClick4() {\n  animationRef.play();\n}\n",
    "style": "button {\n  margin: 0 0.5rem;\n}\nplus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<plus-center>\n  <plus-animation iterations={3} name=\"fade-out\" bind:this={animationRef}></plus-animation>\n</plus-center>\n<br />\n<plus-center>\n  <button on:click={onClick1}>Cancel</button>\n  <button on:click={onClick2}>Finish</button>\n  <button on:click={onClick3}>Pause</button>\n  <button on:click={onClick4}>Play</button>\n</plus-center>\n"
  },
  {
    "key": "vue/animation/methods",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/center.js';\n\nconst animationRef = ref();\nfunction onClick1() {\n  animationRef.value.cancel();\n}\nfunction onClick2() {\n  animationRef.value.finish();\n}\nfunction onClick3() {\n  animationRef.value.pause();\n}\nfunction onClick4() {\n  animationRef.value.play();\n}\n",
    "style": "button {\n  margin: 0 0.5rem;\n}\nplus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-animation :iterations=\"3\" name=\"fade-out\" ref=\"animationRef\"></plus-animation>\n  </plus-center>\n  <br />\n  <plus-center>\n    <button @click=\"onClick1\">Cancel</button>\n    <button @click=\"onClick2\">Finish</button>\n    <button @click=\"onClick3\">Pause</button>\n    <button @click=\"onClick4\">Play</button>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/animation/name",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-x.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-y.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation [iterations]=\"Infinity\" name=\"flip-in-x\" run></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation [iterations]=\"Infinity\" name=\"flip-in-y\" run></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/animation/name",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-x.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-y.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation iterations=\"Infinity\" name=\"flip-in-x\" run></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation iterations=\"Infinity\" name=\"flip-in-y\" run></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/animation/name",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-x.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-y.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-animation iterations={Infinity} name=\"flip-in-x\" run></plus-animation>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-animation iterations={Infinity} name=\"flip-in-y\" run></plus-animation>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/animation/name",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-x.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-y.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-animation iterations={Infinity} name=\"flip-in-x\" run></plus-animation>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-animation iterations={Infinity} name=\"flip-in-y\" run></plus-animation>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/animation/name",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-x.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-y.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation iterations={Infinity} name=\"flip-in-x\" run></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation iterations={Infinity} name=\"flip-in-y\" run></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/animation/name",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-x.js';\nimport '@htmlplus/ui/animation/names/flippers/flip-in-y.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-animation {\n  background: lightgray;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation :iterations=\"Infinity\" name=\"flip-in-x\" run></plus-animation>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-animation :iterations=\"Infinity\" name=\"flip-in-y\" run></plus-animation>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/animation/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    animation: {\n      'custom-pulse': [\n        {\n          offset: 0,\n          opacity: '0.6',\n          transform: 'scale(1.00)'\n        },\n        {\n          offset: 1,\n          opacity: '0.0',\n          transform: 'scale(1.60)'\n        }\n      ]\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-avatar {\n  margin: 1.5rem;\n}\nplus-animation {\n  border: solid 3px black;\n  display: inline-block;\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  z-index: -1;\n}\n",
    "template": "<plus-center>\n  <plus-avatar shape=\"circle\">\n    <plus-animation\n      [delay]=\"0000\"\n      [duration]=\"2000\"\n      [iterations]=\"Infinity\"\n      name=\"custom-pulse\"\n      run\n    ></plus-animation>\n    <plus-animation\n      [delay]=\"1000\"\n      [duration]=\"2000\"\n      [iterations]=\"Infinity\"\n      name=\"custom-pulse\"\n      run\n    ></plus-animation>\n    <img src=\"https://picsum.photos/id/64/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "javascript/animation/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    animation: {\n      'custom-pulse': [\n        {\n          offset: 0,\n          opacity: '0.6',\n          transform: 'scale(1.00)'\n        },\n        {\n          offset: 1,\n          opacity: '0.0',\n          transform: 'scale(1.60)'\n        }\n      ]\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar {\n  margin: 1.5rem;\n}\nplus-animation {\n  border: solid 3px black;\n  display: inline-block;\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  z-index: -1;\n}\n",
    "template": "<plus-center>\n  <plus-avatar shape=\"circle\">\n    <plus-animation\n      delay=\"0000\"\n      duration=\"2000\"\n      iterations=\"Infinity\"\n      name=\"custom-pulse\"\n      run\n    ></plus-animation>\n    <plus-animation\n      delay=\"1000\"\n      duration=\"2000\"\n      iterations=\"Infinity\"\n      name=\"custom-pulse\"\n      run\n    ></plus-animation>\n    <img src=\"https://picsum.photos/id/64/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "react/animation/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    animation: {\n      'custom-pulse': [\n        {\n          offset: 0,\n          opacity: '0.6',\n          transform: 'scale(1.00)'\n        },\n        {\n          offset: 1,\n          opacity: '0.0',\n          transform: 'scale(1.60)'\n        }\n      ]\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar shape=\"circle\">\n        <plus-animation\n          delay={0}\n          duration={2000}\n          iterations={Infinity}\n          name=\"custom-pulse\"\n          run\n        ></plus-animation>\n        <plus-animation\n          delay={1000}\n          duration={2000}\n          iterations={Infinity}\n          name=\"custom-pulse\"\n          run\n        ></plus-animation>\n        <img src=\"https://picsum.photos/id/64/90/90\" />\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar {\n  margin: 1.5rem;\n}\nplus-animation {\n  border: solid 3px black;\n  display: inline-block;\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  z-index: -1;\n}\n"
  },
  {
    "key": "react-experimental/animation/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    animation: {\n      'custom-pulse': [\n        {\n          offset: 0,\n          opacity: '0.6',\n          transform: 'scale(1.00)'\n        },\n        {\n          offset: 1,\n          opacity: '0.0',\n          transform: 'scale(1.60)'\n        }\n      ]\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar shape=\"circle\">\n        <plus-animation\n          delay={0}\n          duration={2000}\n          iterations={Infinity}\n          name=\"custom-pulse\"\n          run\n        ></plus-animation>\n        <plus-animation\n          delay={1000}\n          duration={2000}\n          iterations={Infinity}\n          name=\"custom-pulse\"\n          run\n        ></plus-animation>\n        <img src=\"https://picsum.photos/id/64/90/90\" />\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar {\n  margin: 1.5rem;\n}\nplus-animation {\n  border: solid 3px black;\n  display: inline-block;\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  z-index: -1;\n}\n"
  },
  {
    "key": "svelte/animation/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    animation: {\n      'custom-pulse': [\n        {\n          offset: 0,\n          opacity: '0.6',\n          transform: 'scale(1.00)'\n        },\n        {\n          offset: 1,\n          opacity: '0.0',\n          transform: 'scale(1.60)'\n        }\n      ]\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar {\n  margin: 1.5rem;\n}\nplus-animation {\n  border: solid 3px black;\n  display: inline-block;\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  z-index: -1;\n}\n",
    "template": "<plus-center>\n  <plus-avatar shape=\"circle\">\n    <plus-animation delay={0} duration={2000} iterations={Infinity} name=\"custom-pulse\" run\n    ></plus-animation>\n    <plus-animation delay={1000} duration={2000} iterations={Infinity} name=\"custom-pulse\" run\n    ></plus-animation>\n    <img src=\"https://picsum.photos/id/64/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "vue/animation/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    animation: {\n      'custom-pulse': [\n        {\n          offset: 0,\n          opacity: '0.6',\n          transform: 'scale(1.00)'\n        },\n        {\n          offset: 1,\n          opacity: '0.0',\n          transform: 'scale(1.60)'\n        }\n      ]\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar {\n  margin: 1.5rem;\n}\nplus-animation {\n  border: solid 3px black;\n  display: inline-block;\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  z-index: -1;\n}\n",
    "template": "<plus-center>\n  <plus-avatar shape=\"circle\">\n    <plus-animation\n      :delay=\"0000\"\n      :duration=\"2000\"\n      :iterations=\"Infinity\"\n      name=\"custom-pulse\"\n      run\n    ></plus-animation>\n    <plus-animation\n      :delay=\"1000\"\n      :duration=\"2000\"\n      :iterations=\"Infinity\"\n      name=\"custom-pulse\"\n      run\n    ></plus-animation>\n    <img src=\"https://picsum.photos/id/64/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "angular/aspect-ratio/card",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  width: 300px;\n}\n.placeholder {\n  background-color: lightgray;\n  border-radius: 4px;\n}\n",
    "template": "<plus-center>\n  <plus-card outlined>\n    <plus-card-body>\n      <plus-aspect-ratio value=\"16/9\">\n        <div class=\"placeholder\"></div>\n      </plus-aspect-ratio>\n      <h3>Title</h3>\n      <p>Description of the card.</p>\n    </plus-card-body>\n  </plus-card>\n</plus-center>\n"
  },
  {
    "key": "javascript/aspect-ratio/card",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-card {\n  width: 300px;\n}\n.placeholder {\n  background-color: lightgray;\n  border-radius: 4px;\n}\n",
    "template": "<plus-center>\n  <plus-card outlined>\n    <plus-card-body>\n      <plus-aspect-ratio value=\"16/9\">\n        <div class=\"placeholder\"></div>\n      </plus-aspect-ratio>\n      <h3>Title</h3>\n      <p>Description of the card.</p>\n    </plus-card-body>\n  </plus-card>\n</plus-center>\n"
  },
  {
    "key": "react/aspect-ratio/card",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-card outlined>\n        <plus-card-body>\n          <plus-aspect-ratio value=\"16/9\">\n            <div className=\"placeholder\"></div>\n          </plus-aspect-ratio>\n          <h3>Title</h3>\n          <p>Description of the card.</p>\n        </plus-card-body>\n      </plus-card>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  width: 300px;\n}\n.placeholder {\n  background-color: lightgray;\n  border-radius: 4px;\n}\n"
  },
  {
    "key": "react-experimental/aspect-ratio/card",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-card outlined>\n        <plus-card-body>\n          <plus-aspect-ratio value=\"16/9\">\n            <div className=\"placeholder\"></div>\n          </plus-aspect-ratio>\n          <h3>Title</h3>\n          <p>Description of the card.</p>\n        </plus-card-body>\n      </plus-card>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  width: 300px;\n}\n.placeholder {\n  background-color: lightgray;\n  border-radius: 4px;\n}\n"
  },
  {
    "key": "svelte/aspect-ratio/card",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-card {\n  width: 300px;\n}\n.placeholder {\n  background-color: lightgray;\n  border-radius: 4px;\n}\n",
    "template": "<plus-center>\n  <plus-card outlined>\n    <plus-card-body>\n      <plus-aspect-ratio value=\"16/9\">\n        <div class=\"placeholder\"></div>\n      </plus-aspect-ratio>\n      <h3>Title</h3>\n      <p>Description of the card.</p>\n    </plus-card-body>\n  </plus-card>\n</plus-center>\n"
  },
  {
    "key": "vue/aspect-ratio/card",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-card {\n  width: 300px;\n}\n.placeholder {\n  background-color: lightgray;\n  border-radius: 4px;\n}\n",
    "template": "<plus-center>\n  <plus-card outlined>\n    <plus-card-body>\n      <plus-aspect-ratio value=\"16/9\">\n        <div class=\"placeholder\"></div>\n      </plus-aspect-ratio>\n      <h3>Title</h3>\n      <p>Description of the card.</p>\n    </plus-card-body>\n  </plus-card>\n</plus-center>\n"
  },
  {
    "key": "angular/aspect-ratio/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n}\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <plus-card tile>\n    <plus-card-body>\n      This box will always be 16/9 (unless you put more stuff in it)\n    </plus-card-body>\n  </plus-card>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "javascript/aspect-ratio/default",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n}\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <plus-card tile>\n    <plus-card-body>\n      This box will always be 16/9 (unless you put more stuff in it)\n    </plus-card-body>\n  </plus-card>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "react/aspect-ratio/default",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"16/9\">\n      <plus-card tile>\n        <plus-card-body>\n          This box will always be 16/9 (unless you put more stuff in it)\n        </plus-card-body>\n      </plus-card>\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n}\n"
  },
  {
    "key": "react-experimental/aspect-ratio/default",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"16/9\">\n      <plus-card tile>\n        <plus-card-body>\n          This box will always be 16/9 (unless you put more stuff in it)\n        </plus-card-body>\n      </plus-card>\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n}\n"
  },
  {
    "key": "svelte/aspect-ratio/default",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n}\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <plus-card tile>\n    <plus-card-body>\n      This box will always be 16/9 (unless you put more stuff in it)\n    </plus-card-body>\n  </plus-card>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "vue/aspect-ratio/default",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n}\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <plus-card tile>\n    <plus-card-body>\n      This box will always be 16/9 (unless you put more stuff in it)\n    </plus-card-body>\n  </plus-card>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "angular/aspect-ratio/image",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/aspect-ratio.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-aspect-ratio value=\"18/6\">\n  <img src=\"https://picsum.photos/id/95/640/640\" style=\"object-fit: cover\" />\n</plus-aspect-ratio>\n"
  },
  {
    "key": "javascript/aspect-ratio/image",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"18/6\">\n  <img src=\"https://picsum.photos/id/95/640/640\" style=\"object-fit: cover\" />\n</plus-aspect-ratio>\n"
  },
  {
    "key": "react/aspect-ratio/image",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"18/6\">\n      <img\n        src=\"https://picsum.photos/id/95/640/640\"\n        style={{\n          objectFit: 'cover'\n        }}\n      />\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/aspect-ratio/image",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"18/6\">\n      <img\n        src=\"https://picsum.photos/id/95/640/640\"\n        style={{\n          objectFit: 'cover'\n        }}\n      />\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/aspect-ratio/image",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"18/6\">\n  <img src=\"https://picsum.photos/id/95/640/640\" style=\"object-fit: cover;\" />\n</plus-aspect-ratio>\n"
  },
  {
    "key": "vue/aspect-ratio/image",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"18/6\">\n  <img src=\"https://picsum.photos/id/95/640/640\" style=\"object-fit: cover\" />\n</plus-aspect-ratio>\n"
  },
  {
    "key": "angular/aspect-ratio/map",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/aspect-ratio.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-aspect-ratio value=\"4/3\">\n  <iframe src=\"https://www.google.com/maps/embed\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "javascript/aspect-ratio/map",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"4/3\">\n  <iframe src=\"https://www.google.com/maps/embed\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "react/aspect-ratio/map",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"4/3\">\n      <iframe src=\"https://www.google.com/maps/embed\"></iframe>\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/aspect-ratio/map",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"4/3\">\n      <iframe src=\"https://www.google.com/maps/embed\"></iframe>\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/aspect-ratio/map",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"4/3\">\n  <iframe src=\"https://www.google.com/maps/embed\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "vue/aspect-ratio/map",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"4/3\">\n  <iframe src=\"https://www.google.com/maps/embed\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "angular/aspect-ratio/more",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".box {\n  color: white;\n  padding: 0.75rem;\n  margin: 0.25rem;\n}\n.ratio-one {\n  width: 40.625%;\n  float: right;\n}\n.one {\n  background: #08dfc8;\n}\n.two {\n  background: #ff5449;\n}\n.three {\n  background: #5f9ee9;\n}\n.four {\n  background: #ffc903;\n}\n.five {\n  background: #9073c1;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n          <div class=\"box one\">3/2</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"16/9\">\n          <div class=\"box two\">16/9</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"6\">\n        <plus-aspect-ratio value=\"1\">\n          <div class=\"box three\">1/1</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\" align-self=\"end\">\n        <plus-aspect-ratio value=\"4/3\">\n          <div class=\"box four\">4/3</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"18/6\">\n          <div class=\"box five\">18/6</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/aspect-ratio/more",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": ".box {\n  color: white;\n  padding: 0.75rem;\n  margin: 0.25rem;\n}\n.ratio-one {\n  width: 40.625%;\n  float: right;\n}\n.one {\n  background: #08dfc8;\n}\n.two {\n  background: #ff5449;\n}\n.three {\n  background: #5f9ee9;\n}\n.four {\n  background: #ffc903;\n}\n.five {\n  background: #9073c1;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n          <div class=\"box one\">3/2</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"16/9\">\n          <div class=\"box two\">16/9</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"6\">\n        <plus-aspect-ratio value=\"1\">\n          <div class=\"box three\">1/1</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\" align-self=\"end\">\n        <plus-aspect-ratio value=\"4/3\">\n          <div class=\"box four\">4/3</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"18/6\">\n          <div class=\"box five\">18/6</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/aspect-ratio/more",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-grid>\n          <plus-grid-item xs=\"12\">\n            <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n              <div className=\"box one\">3/2</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n          <plus-grid-item xs=\"12\">\n            <plus-aspect-ratio value=\"16/9\">\n              <div className=\"box two\">16/9</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n        </plus-grid>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-grid>\n          <plus-grid-item xs=\"6\">\n            <plus-aspect-ratio value=\"1\">\n              <div className=\"box three\">1/1</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n          <plus-grid-item xs=\"6\" align-self=\"end\">\n            <plus-aspect-ratio value=\"4/3\">\n              <div className=\"box four\">4/3</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n          <plus-grid-item xs=\"12\">\n            <plus-aspect-ratio value=\"18/6\">\n              <div className=\"box five\">18/6</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n        </plus-grid>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": ".box {\n  color: white;\n  padding: 0.75rem;\n  margin: 0.25rem;\n}\n.ratio-one {\n  width: 40.625%;\n  float: right;\n}\n.one {\n  background: #08dfc8;\n}\n.two {\n  background: #ff5449;\n}\n.three {\n  background: #5f9ee9;\n}\n.four {\n  background: #ffc903;\n}\n.five {\n  background: #9073c1;\n}\n"
  },
  {
    "key": "react-experimental/aspect-ratio/more",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-grid>\n          <plus-grid-item xs=\"12\">\n            <plus-aspect-ratio value=\"3/2\" className=\"ratio-one\">\n              <div className=\"box one\">3/2</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n          <plus-grid-item xs=\"12\">\n            <plus-aspect-ratio value=\"16/9\">\n              <div className=\"box two\">16/9</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n        </plus-grid>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-grid>\n          <plus-grid-item xs=\"6\">\n            <plus-aspect-ratio value=\"1\">\n              <div className=\"box three\">1/1</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n          <plus-grid-item xs=\"6\" align-self=\"end\">\n            <plus-aspect-ratio value=\"4/3\">\n              <div className=\"box four\">4/3</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n          <plus-grid-item xs=\"12\">\n            <plus-aspect-ratio value=\"18/6\">\n              <div className=\"box five\">18/6</div>\n            </plus-aspect-ratio>\n          </plus-grid-item>\n        </plus-grid>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": ".box {\n  color: white;\n  padding: 0.75rem;\n  margin: 0.25rem;\n}\n.ratio-one {\n  width: 40.625%;\n  float: right;\n}\n.one {\n  background: #08dfc8;\n}\n.two {\n  background: #ff5449;\n}\n.three {\n  background: #5f9ee9;\n}\n.four {\n  background: #ffc903;\n}\n.five {\n  background: #9073c1;\n}\n"
  },
  {
    "key": "svelte/aspect-ratio/more",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": ".box {\n  color: white;\n  padding: 0.75rem;\n  margin: 0.25rem;\n}\n.ratio-one {\n  width: 40.625%;\n  float: right;\n}\n.one {\n  background: #08dfc8;\n}\n.two {\n  background: #ff5449;\n}\n.three {\n  background: #5f9ee9;\n}\n.four {\n  background: #ffc903;\n}\n.five {\n  background: #9073c1;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n          <div class=\"box one\">3/2</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"16/9\">\n          <div class=\"box two\">16/9</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"6\">\n        <plus-aspect-ratio value=\"1\">\n          <div class=\"box three\">1/1</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\" align-self=\"end\">\n        <plus-aspect-ratio value=\"4/3\">\n          <div class=\"box four\">4/3</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"18/6\">\n          <div class=\"box five\">18/6</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/aspect-ratio/more",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": ".box {\n  color: white;\n  padding: 0.75rem;\n  margin: 0.25rem;\n}\n.ratio-one {\n  width: 40.625%;\n  float: right;\n}\n.one {\n  background: #08dfc8;\n}\n.two {\n  background: #ff5449;\n}\n.three {\n  background: #5f9ee9;\n}\n.four {\n  background: #ffc903;\n}\n.five {\n  background: #9073c1;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n          <div class=\"box one\">3/2</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"16/9\">\n          <div class=\"box two\">16/9</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"6\">\n        <plus-aspect-ratio value=\"1\">\n          <div class=\"box three\">1/1</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\" align-self=\"end\">\n        <plus-aspect-ratio value=\"4/3\">\n          <div class=\"box four\">4/3</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"18/6\">\n          <div class=\"box five\">18/6</div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/aspect-ratio/video",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/aspect-ratio.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "javascript/aspect-ratio/video",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "react/aspect-ratio/video",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"16/9\">\n      <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/aspect-ratio/video",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n\nfunction App() {\n  return (\n    <plus-aspect-ratio value=\"16/9\">\n      <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\n    </plus-aspect-ratio>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/aspect-ratio/video",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "vue/aspect-ratio/video",
    "script": "import '@htmlplus/ui/aspect-ratio.js';\n",
    "template": "<plus-aspect-ratio value=\"16/9\">\n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"></iframe>\n</plus-aspect-ratio>\n"
  },
  {
    "key": "angular/avatar/color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-avatar color=\"#808080\">AB</plus-avatar>\n  <plus-avatar color=\"#2fb344\">CD</plus-avatar>\n  <plus-avatar color=\"#d63939\">EF</plus-avatar>\n  <plus-avatar color=\"#f59f00\">GH</plus-avatar>\n  <plus-avatar color=\"#206bc4\">IJ</plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "javascript/avatar/color",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-avatar color=\"#808080\">AB</plus-avatar>\n  <plus-avatar color=\"#2fb344\">CD</plus-avatar>\n  <plus-avatar color=\"#d63939\">EF</plus-avatar>\n  <plus-avatar color=\"#f59f00\">GH</plus-avatar>\n  <plus-avatar color=\"#206bc4\">IJ</plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "react/avatar/color",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"1rem\">\n      <plus-avatar color=\"#808080\">AB</plus-avatar>\n      <plus-avatar color=\"#2fb344\">CD</plus-avatar>\n      <plus-avatar color=\"#d63939\">EF</plus-avatar>\n      <plus-avatar color=\"#f59f00\">GH</plus-avatar>\n      <plus-avatar color=\"#206bc4\">IJ</plus-avatar>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/color",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"1rem\">\n      <plus-avatar color=\"#808080\">AB</plus-avatar>\n      <plus-avatar color=\"#2fb344\">CD</plus-avatar>\n      <plus-avatar color=\"#d63939\">EF</plus-avatar>\n      <plus-avatar color=\"#f59f00\">GH</plus-avatar>\n      <plus-avatar color=\"#206bc4\">IJ</plus-avatar>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/color",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-avatar color=\"#808080\">AB</plus-avatar>\n  <plus-avatar color=\"#2fb344\">CD</plus-avatar>\n  <plus-avatar color=\"#d63939\">EF</plus-avatar>\n  <plus-avatar color=\"#f59f00\">GH</plus-avatar>\n  <plus-avatar color=\"#206bc4\">IJ</plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "vue/avatar/color",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-avatar color=\"#808080\">AB</plus-avatar>\n  <plus-avatar color=\"#2fb344\">CD</plus-avatar>\n  <plus-avatar color=\"#d63939\">EF</plus-avatar>\n  <plus-avatar color=\"#f59f00\">GH</plus-avatar>\n  <plus-avatar color=\"#206bc4\">IJ</plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "angular/avatar/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar></plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/default",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar></plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/default",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar></plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/default",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar></plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/default",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar></plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/default",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar></plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/group-gutter",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-avatar-group plus-avatar {\n  margin-inline-end: 2rem;\n}\nplus-avatar-group[stacked] plus-avatar {\n  margin-inline-end: -2rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n<br />\n<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/group-gutter",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar-group plus-avatar {\n  margin-inline-end: 2rem;\n}\nplus-avatar-group[stacked] plus-avatar {\n  margin-inline-end: -2rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n<br />\n<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/group-gutter",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-avatar-group>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n        </plus-avatar-group>\n      </plus-center>\n      <br />\n      <plus-center>\n        <plus-avatar-group stacked>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n        </plus-avatar-group>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar-group plus-avatar {\n  margin-inline-end: 2rem;\n}\nplus-avatar-group[stacked] plus-avatar {\n  margin-inline-end: -2rem;\n}\n"
  },
  {
    "key": "react-experimental/avatar/group-gutter",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-avatar-group>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n        </plus-avatar-group>\n      </plus-center>\n      <br />\n      <plus-center>\n        <plus-avatar-group stacked>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n          <plus-avatar></plus-avatar>\n        </plus-avatar-group>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar-group plus-avatar {\n  margin-inline-end: 2rem;\n}\nplus-avatar-group[stacked] plus-avatar {\n  margin-inline-end: -2rem;\n}\n"
  },
  {
    "key": "svelte/avatar/group-gutter",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar-group plus-avatar {\n  margin-inline-end: 2rem;\n}\nplus-avatar-group[stacked] plus-avatar {\n  margin-inline-end: -2rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n<br />\n<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/group-gutter",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar-group plus-avatar {\n  margin-inline-end: 2rem;\n}\nplus-avatar-group[stacked] plus-avatar {\n  margin-inline-end: -2rem;\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-avatar-group>\n      <plus-avatar></plus-avatar>\n      <plus-avatar></plus-avatar>\n      <plus-avatar></plus-avatar>\n    </plus-avatar-group>\n  </plus-center>\n  <br />\n  <plus-center>\n    <plus-avatar-group stacked>\n      <plus-avatar></plus-avatar>\n      <plus-avatar></plus-avatar>\n      <plus-avatar></plus-avatar>\n    </plus-avatar-group>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/avatar/group-hoverable",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked hoverable>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/548/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/628/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/660/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/669/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\"> +2 </plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/group-hoverable",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked hoverable>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/548/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/628/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/660/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/669/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\"> +2 </plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/group-hoverable",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group stacked hoverable>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/548/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/628/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/660/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/669/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\"> +2 </plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/group-hoverable",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group stacked hoverable>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/548/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/628/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/660/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\">\n          <img src=\"https://picsum.photos/id/669/90/90\" />\n        </plus-avatar>\n        <plus-avatar shape=\"circle\"> +2 </plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/group-hoverable",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked hoverable>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/548/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/628/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/660/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/669/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\"> +2 </plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/group-hoverable",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked hoverable>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/548/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/628/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/660/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\">\n      <img src=\"https://picsum.photos/id/669/90/90\" />\n    </plus-avatar>\n    <plus-avatar shape=\"circle\"> +2 </plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/group-link-with-tooltip",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 1</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 2</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 3</plus-tooltip>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/group-link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 1</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 2</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 3</plus-tooltip>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/group-link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar>\n          <img src=\"https://picsum.photos/id/177/90/90\" />\n          <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n        </plus-avatar>\n        <plus-tooltip>Tooltip 1</plus-tooltip>\n        <plus-avatar>\n          <img src=\"https://picsum.photos/id/177/90/90\" />\n          <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n        </plus-avatar>\n        <plus-tooltip>Tooltip 2</plus-tooltip>\n        <plus-avatar>\n          <img src=\"https://picsum.photos/id/177/90/90\" />\n          <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n        </plus-avatar>\n        <plus-tooltip>Tooltip 3</plus-tooltip>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/group-link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar>\n          <img src=\"https://picsum.photos/id/177/90/90\" />\n          <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n        </plus-avatar>\n        <plus-tooltip>Tooltip 1</plus-tooltip>\n        <plus-avatar>\n          <img src=\"https://picsum.photos/id/177/90/90\" />\n          <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n        </plus-avatar>\n        <plus-tooltip>Tooltip 2</plus-tooltip>\n        <plus-avatar>\n          <img src=\"https://picsum.photos/id/177/90/90\" />\n          <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n        </plus-avatar>\n        <plus-tooltip>Tooltip 3</plus-tooltip>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/group-link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 1</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 2</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 3</plus-tooltip>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/group-link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 1</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 2</plus-tooltip>\n    <plus-avatar>\n      <img src=\"https://picsum.photos/id/177/90/90\" />\n      <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n    </plus-avatar>\n    <plus-tooltip>Tooltip 3</plus-tooltip>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/group-stacked",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/group-stacked",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/group-stacked",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group stacked>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/group-stacked",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group stacked>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/group-stacked",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/group-stacked",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group stacked>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/group",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/group",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/group",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/group",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n        <plus-avatar></plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/group",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/group",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n    <plus-avatar></plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/icon",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <plus-icon name=\"person\"></plus-icon>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/icon",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <plus-icon name=\"person\"></plus-icon>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/icon",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <plus-icon name=\"person\"></plus-icon>\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/icon",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <plus-icon name=\"person\"></plus-icon>\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/icon",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <plus-icon name=\"person\"></plus-icon>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/icon",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <plus-icon name=\"person\"></plus-icon>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/image",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/65/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/image",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/65/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/image",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <img src=\"https://picsum.photos/id/65/90/90\" />\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/image",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <img src=\"https://picsum.photos/id/65/90/90\" />\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/image",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/65/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/image",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/65/90/90\" />\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/link-with-tooltip",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/177/90/90\" />\n    <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n  </plus-avatar>\n  <plus-tooltip>Tooltip</plus-tooltip>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/177/90/90\" />\n    <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n  </plus-avatar>\n  <plus-tooltip>Tooltip</plus-tooltip>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <img src=\"https://picsum.photos/id/177/90/90\" />\n        <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n      </plus-avatar>\n      <plus-tooltip>Tooltip</plus-tooltip>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <img src=\"https://picsum.photos/id/177/90/90\" />\n        <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n      </plus-avatar>\n      <plus-tooltip>Tooltip</plus-tooltip>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/177/90/90\" />\n    <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n  </plus-avatar>\n  <plus-tooltip>Tooltip</plus-tooltip>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/link-with-tooltip",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/tooltip.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <img src=\"https://picsum.photos/id/177/90/90\" />\n    <a href=\"https://picsum.photos/id/177/90/90\" target=\"_blank\"></a>\n  </plus-avatar>\n  <plus-tooltip>Tooltip</plus-tooltip>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/shape",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar shape=\"circle\">C</plus-avatar>\n    <plus-avatar shape=\"round\">R</plus-avatar>\n    <plus-avatar shape=\"tile\">T</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/shape",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar shape=\"circle\">C</plus-avatar>\n    <plus-avatar shape=\"round\">R</plus-avatar>\n    <plus-avatar shape=\"tile\">T</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/shape",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar shape=\"circle\">C</plus-avatar>\n        <plus-avatar shape=\"round\">R</plus-avatar>\n        <plus-avatar shape=\"tile\">T</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/shape",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar shape=\"circle\">C</plus-avatar>\n        <plus-avatar shape=\"round\">R</plus-avatar>\n        <plus-avatar shape=\"tile\">T</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/shape",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar shape=\"circle\">C</plus-avatar>\n    <plus-avatar shape=\"round\">R</plus-avatar>\n    <plus-avatar shape=\"tile\">T</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/shape",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar shape=\"circle\">C</plus-avatar>\n    <plus-avatar shape=\"round\">R</plus-avatar>\n    <plus-avatar shape=\"tile\">T</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/size-overriding",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-avatar[size='xxs'] {\n  --plus-avatar-size: 1.5rem;\n}\nplus-avatar[size='xs'] {\n  --plus-avatar-size: 2rem;\n}\nplus-avatar[size='sm'] {\n  --plus-avatar-size: 2.5rem;\n}\nplus-avatar[size='md'] {\n  --plus-avatar-size: 3rem;\n}\nplus-avatar[size='lg'] {\n  --plus-avatar-size: 3.5rem;\n}\nplus-avatar[size='xl'] {\n  --plus-avatar-size: 4rem;\n}\nplus-avatar[size='xxl'] {\n  --plus-avatar-size: 4.5rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/size-overriding",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar[size='xxs'] {\n  --plus-avatar-size: 1.5rem;\n}\nplus-avatar[size='xs'] {\n  --plus-avatar-size: 2rem;\n}\nplus-avatar[size='sm'] {\n  --plus-avatar-size: 2.5rem;\n}\nplus-avatar[size='md'] {\n  --plus-avatar-size: 3rem;\n}\nplus-avatar[size='lg'] {\n  --plus-avatar-size: 3.5rem;\n}\nplus-avatar[size='xl'] {\n  --plus-avatar-size: 4rem;\n}\nplus-avatar[size='xxl'] {\n  --plus-avatar-size: 4.5rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/size-overriding",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar size=\"xxs\">xxs</plus-avatar>\n        <plus-avatar size=\"xs\">xs</plus-avatar>\n        <plus-avatar size=\"sm\">sm</plus-avatar>\n        <plus-avatar size=\"md\">md</plus-avatar>\n        <plus-avatar size=\"lg\">lg</plus-avatar>\n        <plus-avatar size=\"xl\">xl</plus-avatar>\n        <plus-avatar size=\"xxl\">xxl</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar[size='xxs'] {\n  --plus-avatar-size: 1.5rem;\n}\nplus-avatar[size='xs'] {\n  --plus-avatar-size: 2rem;\n}\nplus-avatar[size='sm'] {\n  --plus-avatar-size: 2.5rem;\n}\nplus-avatar[size='md'] {\n  --plus-avatar-size: 3rem;\n}\nplus-avatar[size='lg'] {\n  --plus-avatar-size: 3.5rem;\n}\nplus-avatar[size='xl'] {\n  --plus-avatar-size: 4rem;\n}\nplus-avatar[size='xxl'] {\n  --plus-avatar-size: 4.5rem;\n}\n"
  },
  {
    "key": "react-experimental/avatar/size-overriding",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar size=\"xxs\">xxs</plus-avatar>\n        <plus-avatar size=\"xs\">xs</plus-avatar>\n        <plus-avatar size=\"sm\">sm</plus-avatar>\n        <plus-avatar size=\"md\">md</plus-avatar>\n        <plus-avatar size=\"lg\">lg</plus-avatar>\n        <plus-avatar size=\"xl\">xl</plus-avatar>\n        <plus-avatar size=\"xxl\">xxl</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar[size='xxs'] {\n  --plus-avatar-size: 1.5rem;\n}\nplus-avatar[size='xs'] {\n  --plus-avatar-size: 2rem;\n}\nplus-avatar[size='sm'] {\n  --plus-avatar-size: 2.5rem;\n}\nplus-avatar[size='md'] {\n  --plus-avatar-size: 3rem;\n}\nplus-avatar[size='lg'] {\n  --plus-avatar-size: 3.5rem;\n}\nplus-avatar[size='xl'] {\n  --plus-avatar-size: 4rem;\n}\nplus-avatar[size='xxl'] {\n  --plus-avatar-size: 4.5rem;\n}\n"
  },
  {
    "key": "svelte/avatar/size-overriding",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar[size='xxs'] {\n  --plus-avatar-size: 1.5rem;\n}\nplus-avatar[size='xs'] {\n  --plus-avatar-size: 2rem;\n}\nplus-avatar[size='sm'] {\n  --plus-avatar-size: 2.5rem;\n}\nplus-avatar[size='md'] {\n  --plus-avatar-size: 3rem;\n}\nplus-avatar[size='lg'] {\n  --plus-avatar-size: 3.5rem;\n}\nplus-avatar[size='xl'] {\n  --plus-avatar-size: 4rem;\n}\nplus-avatar[size='xxl'] {\n  --plus-avatar-size: 4.5rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/size-overriding",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-avatar[size='xxs'] {\n  --plus-avatar-size: 1.5rem;\n}\nplus-avatar[size='xs'] {\n  --plus-avatar-size: 2rem;\n}\nplus-avatar[size='sm'] {\n  --plus-avatar-size: 2.5rem;\n}\nplus-avatar[size='md'] {\n  --plus-avatar-size: 3rem;\n}\nplus-avatar[size='lg'] {\n  --plus-avatar-size: 3.5rem;\n}\nplus-avatar[size='xl'] {\n  --plus-avatar-size: 4rem;\n}\nplus-avatar[size='xxl'] {\n  --plus-avatar-size: 4.5rem;\n}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar size=\"xxs\">xxs</plus-avatar>\n        <plus-avatar size=\"xs\">xs</plus-avatar>\n        <plus-avatar size=\"sm\">sm</plus-avatar>\n        <plus-avatar size=\"md\">md</plus-avatar>\n        <plus-avatar size=\"lg\">lg</plus-avatar>\n        <plus-avatar size=\"xl\">xl</plus-avatar>\n        <plus-avatar size=\"xxl\">xxl</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar size=\"xxs\">xxs</plus-avatar>\n        <plus-avatar size=\"xs\">xs</plus-avatar>\n        <plus-avatar size=\"sm\">sm</plus-avatar>\n        <plus-avatar size=\"md\">md</plus-avatar>\n        <plus-avatar size=\"lg\">lg</plus-avatar>\n        <plus-avatar size=\"xl\">xl</plus-avatar>\n        <plus-avatar size=\"xxl\">xxl</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"xxs\">xxs</plus-avatar>\n    <plus-avatar size=\"xs\">xs</plus-avatar>\n    <plus-avatar size=\"sm\">sm</plus-avatar>\n    <plus-avatar size=\"md\">md</plus-avatar>\n    <plus-avatar size=\"lg\">lg</plus-avatar>\n    <plus-avatar size=\"xl\">xl</plus-avatar>\n    <plus-avatar size=\"xxl\">xxl</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/slots",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-avatar > div {\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  padding: 0.125rem 0.25rem;\n  font-family: monospace;\n  line-height: 1;\n}\n",
    "template": "<plus-stack gap=\"8rem\">\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"left\">left</div>\n    <div slot=\"left-bottom\">left-bottom</div>\n    <div slot=\"left-top\">left-top</div>\n    <div slot=\"right\">right</div>\n    <div slot=\"right-bottom\">right-bottom</div>\n    <div slot=\"right-top\">right-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"end\">end</div>\n    <div slot=\"end-bottom\">end-bottom</div>\n    <div slot=\"end-top\">end-top</div>\n    <div slot=\"start\">start</div>\n    <div slot=\"start-bottom\">start-bottom</div>\n    <div slot=\"start-top\">start-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "javascript/avatar/slots",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-avatar > div {\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  padding: 0.125rem 0.25rem;\n  font-family: monospace;\n  line-height: 1;\n}\n",
    "template": "<plus-stack gap=\"8rem\">\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"left\">left</div>\n    <div slot=\"left-bottom\">left-bottom</div>\n    <div slot=\"left-top\">left-top</div>\n    <div slot=\"right\">right</div>\n    <div slot=\"right-bottom\">right-bottom</div>\n    <div slot=\"right-top\">right-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"end\">end</div>\n    <div slot=\"end-bottom\">end-bottom</div>\n    <div slot=\"end-top\">end-top</div>\n    <div slot=\"start\">start</div>\n    <div slot=\"start-bottom\">start-bottom</div>\n    <div slot=\"start-top\">start-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "react/avatar/slots",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"8rem\">\n      <plus-avatar size=\"xxl\">\n        <div slot=\"bottom\">bottom</div>\n        <div slot=\"center\">center</div>\n        <div slot=\"left\">left</div>\n        <div slot=\"left-bottom\">left-bottom</div>\n        <div slot=\"left-top\">left-top</div>\n        <div slot=\"right\">right</div>\n        <div slot=\"right-bottom\">right-bottom</div>\n        <div slot=\"right-top\">right-top</div>\n        <div slot=\"top\">top</div>\n      </plus-avatar>\n      <plus-avatar size=\"xxl\">\n        <div slot=\"bottom\">bottom</div>\n        <div slot=\"center\">center</div>\n        <div slot=\"end\">end</div>\n        <div slot=\"end-bottom\">end-bottom</div>\n        <div slot=\"end-top\">end-top</div>\n        <div slot=\"start\">start</div>\n        <div slot=\"start-bottom\">start-bottom</div>\n        <div slot=\"start-top\">start-top</div>\n        <div slot=\"top\">top</div>\n      </plus-avatar>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar > div {\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  padding: 0.125rem 0.25rem;\n  font-family: monospace;\n  line-height: 1;\n}\n"
  },
  {
    "key": "react-experimental/avatar/slots",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"8rem\">\n      <plus-avatar size=\"xxl\">\n        <div slot=\"bottom\">bottom</div>\n        <div slot=\"center\">center</div>\n        <div slot=\"left\">left</div>\n        <div slot=\"left-bottom\">left-bottom</div>\n        <div slot=\"left-top\">left-top</div>\n        <div slot=\"right\">right</div>\n        <div slot=\"right-bottom\">right-bottom</div>\n        <div slot=\"right-top\">right-top</div>\n        <div slot=\"top\">top</div>\n      </plus-avatar>\n      <plus-avatar size=\"xxl\">\n        <div slot=\"bottom\">bottom</div>\n        <div slot=\"center\">center</div>\n        <div slot=\"end\">end</div>\n        <div slot=\"end-bottom\">end-bottom</div>\n        <div slot=\"end-top\">end-top</div>\n        <div slot=\"start\">start</div>\n        <div slot=\"start-bottom\">start-bottom</div>\n        <div slot=\"start-top\">start-top</div>\n        <div slot=\"top\">top</div>\n      </plus-avatar>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-avatar > div {\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  padding: 0.125rem 0.25rem;\n  font-family: monospace;\n  line-height: 1;\n}\n"
  },
  {
    "key": "svelte/avatar/slots",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-avatar > div {\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  padding: 0.125rem 0.25rem;\n  font-family: monospace;\n  line-height: 1;\n}\n",
    "template": "<plus-stack gap=\"8rem\">\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"left\">left</div>\n    <div slot=\"left-bottom\">left-bottom</div>\n    <div slot=\"left-top\">left-top</div>\n    <div slot=\"right\">right</div>\n    <div slot=\"right-bottom\">right-bottom</div>\n    <div slot=\"right-top\">right-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"end\">end</div>\n    <div slot=\"end-bottom\">end-bottom</div>\n    <div slot=\"end-top\">end-top</div>\n    <div slot=\"start\">start</div>\n    <div slot=\"start-bottom\">start-bottom</div>\n    <div slot=\"start-top\">start-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "vue/avatar/slots",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-avatar > div {\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  padding: 0.125rem 0.25rem;\n  font-family: monospace;\n  line-height: 1;\n}\n",
    "template": "<plus-stack gap=\"8rem\">\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"left\">left</div>\n    <div slot=\"left-bottom\">left-bottom</div>\n    <div slot=\"left-top\">left-top</div>\n    <div slot=\"right\">right</div>\n    <div slot=\"right-bottom\">right-bottom</div>\n    <div slot=\"right-top\">right-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n  <plus-avatar size=\"xxl\">\n    <div slot=\"bottom\">bottom</div>\n    <div slot=\"center\">center</div>\n    <div slot=\"end\">end</div>\n    <div slot=\"end-bottom\">end-bottom</div>\n    <div slot=\"end-top\">end-top</div>\n    <div slot=\"start\">start</div>\n    <div slot=\"start-bottom\">start-bottom</div>\n    <div slot=\"start-top\">start-top</div>\n    <div slot=\"top\">top</div>\n  </plus-avatar>\n</plus-stack>\n"
  },
  {
    "key": "angular/avatar/svg",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\">\n      <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n      <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n    </svg>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/svg",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\">\n      <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n      <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n    </svg>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/svg",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\">\n          <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n          <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n          <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n        </svg>\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/svg",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>\n        <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\">\n          <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n          <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n          <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n        </svg>\n      </plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/svg",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\">\n      <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n      <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n    </svg>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/svg",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>\n    <svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\">\n      <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\n      <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path>\n    </svg>\n  </plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/text",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar>T</plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/text",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>T</plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/text",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>T</plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/text",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar>T</plus-avatar>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/text",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>T</plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/text",
    "script": "import '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar>T</plus-avatar>\n</plus-center>\n"
  },
  {
    "key": "angular/avatar/wildcard-size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"48\">48px</plus-avatar>\n    <plus-avatar size=\"64px\">64px</plus-avatar>\n    <plus-avatar size=\"5rem\">5rem</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "javascript/avatar/wildcard-size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"48\">48px</plus-avatar>\n    <plus-avatar size=\"64px\">64px</plus-avatar>\n    <plus-avatar size=\"5rem\">5rem</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "react/avatar/wildcard-size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar size=\"48\">48px</plus-avatar>\n        <plus-avatar size=\"64px\">64px</plus-avatar>\n        <plus-avatar size=\"5rem\">5rem</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/avatar/wildcard-size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-avatar-group>\n        <plus-avatar size=\"48\">48px</plus-avatar>\n        <plus-avatar size=\"64px\">64px</plus-avatar>\n        <plus-avatar size=\"5rem\">5rem</plus-avatar>\n      </plus-avatar-group>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/avatar/wildcard-size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"48\">48px</plus-avatar>\n    <plus-avatar size=\"64px\">64px</plus-avatar>\n    <plus-avatar size=\"5rem\">5rem</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "vue/avatar/wildcard-size",
    "script": "import '@htmlplus/ui/avatar-group.js';\nimport '@htmlplus/ui/avatar.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-avatar-group>\n    <plus-avatar size=\"48\">48px</plus-avatar>\n    <plus-avatar size=\"64px\">64px</plus-avatar>\n    <plus-avatar size=\"5rem\">5rem</plus-avatar>\n  </plus-avatar-group>\n</plus-center>\n"
  },
  {
    "key": "angular/breadcrumb/custom-expander",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\" [max]=\"2\" expander-text=\"Show more\">\n    <plus-icon slot=\"expander\" name=\"chevron-compact-right\"></plus-icon>\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <a href=\"#\">Breadcrumb</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "javascript/breadcrumb/custom-expander",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\" max=\"2\" expander-text=\"Show more\">\n    <plus-icon slot=\"expander\" name=\"chevron-compact-right\"></plus-icon>\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <a href=\"#\">Breadcrumb</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "react/breadcrumb/custom-expander",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"-\" max={2} expander-text=\"Show more\">\n        <plus-icon slot=\"expander\" name=\"chevron-compact-right\"></plus-icon>\n        <a href=\"#\">HTMLPLUS</a>\n        <a href=\"#\">UI</a>\n        <a href=\"#\">Elements</a>\n        <a href=\"#\">Breadcrumb</a>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/custom-expander",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"-\" max={2} expander-text=\"Show more\">\n        <plus-icon slot=\"expander\" name=\"chevron-compact-right\"></plus-icon>\n        <a href=\"#\">HTMLPLUS</a>\n        <a href=\"#\">UI</a>\n        <a href=\"#\">Elements</a>\n        <a href=\"#\">Breadcrumb</a>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/custom-expander",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\" max={2} expander-text=\"Show more\">\n    <plus-icon slot=\"expander\" name=\"chevron-compact-right\"></plus-icon>\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <a href=\"#\">Breadcrumb</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "vue/breadcrumb/custom-expander",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\" :max=\"2\" expander-text=\"Show more\">\n    <plus-icon slot=\"expander\" name=\"chevron-compact-right\"></plus-icon>\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <a href=\"#\">Breadcrumb</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "angular/breadcrumb/custom-separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb>\n    <plus-icon slot=\"separator\" name=\"caret-right-fill\"></plus-icon>\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "javascript/breadcrumb/custom-separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb>\n    <plus-icon slot=\"separator\" name=\"caret-right-fill\"></plus-icon>\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "react/breadcrumb/custom-separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb>\n        <plus-icon slot=\"separator\" name=\"caret-right-fill\"></plus-icon>\n        <a href=\"#\">First</a>\n        <a href=\"#\">Second</a>\n        <a href=\"#\">Third</a>\n        <a href=\"#\">Fourth</a>\n        <a href=\"#\">Fifth</a>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/custom-separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb>\n        <plus-icon slot=\"separator\" name=\"caret-right-fill\"></plus-icon>\n        <a href=\"#\">First</a>\n        <a href=\"#\">Second</a>\n        <a href=\"#\">Third</a>\n        <a href=\"#\">Fourth</a>\n        <a href=\"#\">Fifth</a>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/custom-separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb>\n    <plus-icon slot=\"separator\" name=\"caret-right-fill\"></plus-icon>\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "vue/breadcrumb/custom-separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb>\n    <plus-icon slot=\"separator\" name=\"caret-right-fill\"></plus-icon>\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "angular/breadcrumb/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb {\n  gap: 0.75em;\n  background-color: lightgray;\n  border-radius: 0.25em;\n  padding: 0.75em;\n}\nplus-breadcrumb a {\n  text-decoration: none;\n  color: black;\n}\nplus-breadcrumb::part(expander) {\n  background-color: transparent;\n  color: black;\n  height: 1em;\n  width: 1em;\n}\nplus-breadcrumb::part(separator) {\n  color: black;\n  height: 0.75em;\n  width: 0.75em;\n}\n",
    "template": "<plus-breadcrumb block [max]=\"2\">\n  <plus-icon slot=\"separator\" name=\"arrow-right-short\"></plus-icon>\n  <a href=\"#\">HTMLPLUS</a>\n  <a href=\"#\">UI</a>\n  <a href=\"#\">Elements</a>\n  <a href=\"#\">Breadcrumb</a>\n</plus-breadcrumb>\n"
  },
  {
    "key": "javascript/breadcrumb/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb {\n  gap: 0.75em;\n  background-color: lightgray;\n  border-radius: 0.25em;\n  padding: 0.75em;\n}\nplus-breadcrumb a {\n  text-decoration: none;\n  color: black;\n}\nplus-breadcrumb::part(expander) {\n  background-color: transparent;\n  color: black;\n  height: 1em;\n  width: 1em;\n}\nplus-breadcrumb::part(separator) {\n  color: black;\n  height: 0.75em;\n  width: 0.75em;\n}\n",
    "template": "<plus-breadcrumb block max=\"2\">\n  <plus-icon slot=\"separator\" name=\"arrow-right-short\"></plus-icon>\n  <a href=\"#\">HTMLPLUS</a>\n  <a href=\"#\">UI</a>\n  <a href=\"#\">Elements</a>\n  <a href=\"#\">Breadcrumb</a>\n</plus-breadcrumb>\n"
  },
  {
    "key": "react/breadcrumb/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-breadcrumb block max={2}>\n      <plus-icon slot=\"separator\" name=\"arrow-right-short\"></plus-icon>\n      <a href=\"#\">HTMLPLUS</a>\n      <a href=\"#\">UI</a>\n      <a href=\"#\">Elements</a>\n      <a href=\"#\">Breadcrumb</a>\n    </plus-breadcrumb>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb {\n  gap: 0.75em;\n  background-color: lightgray;\n  border-radius: 0.25em;\n  padding: 0.75em;\n}\nplus-breadcrumb a {\n  text-decoration: none;\n  color: black;\n}\nplus-breadcrumb::part(expander) {\n  background-color: transparent;\n  color: black;\n  height: 1em;\n  width: 1em;\n}\nplus-breadcrumb::part(separator) {\n  color: black;\n  height: 0.75em;\n  width: 0.75em;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-breadcrumb block max={2}>\n      <plus-icon slot=\"separator\" name=\"arrow-right-short\"></plus-icon>\n      <a href=\"#\">HTMLPLUS</a>\n      <a href=\"#\">UI</a>\n      <a href=\"#\">Elements</a>\n      <a href=\"#\">Breadcrumb</a>\n    </plus-breadcrumb>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb {\n  gap: 0.75em;\n  background-color: lightgray;\n  border-radius: 0.25em;\n  padding: 0.75em;\n}\nplus-breadcrumb a {\n  text-decoration: none;\n  color: black;\n}\nplus-breadcrumb::part(expander) {\n  background-color: transparent;\n  color: black;\n  height: 1em;\n  width: 1em;\n}\nplus-breadcrumb::part(separator) {\n  color: black;\n  height: 0.75em;\n  width: 0.75em;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb {\n  gap: 0.75em;\n  background-color: lightgray;\n  border-radius: 0.25em;\n  padding: 0.75em;\n}\nplus-breadcrumb a {\n  text-decoration: none;\n  color: black;\n}\nplus-breadcrumb::part(expander) {\n  background-color: transparent;\n  color: black;\n  height: 1em;\n  width: 1em;\n}\nplus-breadcrumb::part(separator) {\n  color: black;\n  height: 0.75em;\n  width: 0.75em;\n}\n",
    "template": "<plus-breadcrumb block max={2}>\n  <plus-icon slot=\"separator\" name=\"arrow-right-short\"></plus-icon>\n  <a href=\"#\">HTMLPLUS</a>\n  <a href=\"#\">UI</a>\n  <a href=\"#\">Elements</a>\n  <a href=\"#\">Breadcrumb</a>\n</plus-breadcrumb>\n"
  },
  {
    "key": "vue/breadcrumb/customized",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb {\n  gap: 0.75em;\n  background-color: lightgray;\n  border-radius: 0.25em;\n  padding: 0.75em;\n}\nplus-breadcrumb a {\n  text-decoration: none;\n  color: black;\n}\nplus-breadcrumb::part(expander) {\n  background-color: transparent;\n  color: black;\n  height: 1em;\n  width: 1em;\n}\nplus-breadcrumb::part(separator) {\n  color: black;\n  height: 0.75em;\n  width: 0.75em;\n}\n",
    "template": "<plus-breadcrumb block :max=\"2\">\n  <plus-icon slot=\"separator\" name=\"arrow-right-short\"></plus-icon>\n  <a href=\"#\">HTMLPLUS</a>\n  <a href=\"#\">UI</a>\n  <a href=\"#\">Elements</a>\n  <a href=\"#\">Breadcrumb</a>\n</plus-breadcrumb>\n"
  },
  {
    "key": "angular/breadcrumb/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <span>Breadcrumb</span>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "javascript/breadcrumb/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <span>Breadcrumb</span>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "react/breadcrumb/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"/\">\n        <a href=\"#\">HTMLPLUS</a>\n        <a href=\"#\">UI</a>\n        <a href=\"#\">Elements</a>\n        <span>Breadcrumb</span>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"/\">\n        <a href=\"#\">HTMLPLUS</a>\n        <a href=\"#\">UI</a>\n        <a href=\"#\">Elements</a>\n        <span>Breadcrumb</span>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <span>Breadcrumb</span>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "vue/breadcrumb/default",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <a href=\"#\">HTMLPLUS</a>\n    <a href=\"#\">UI</a>\n    <a href=\"#\">Elements</a>\n    <span>Breadcrumb</span>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "angular/breadcrumb/limitation",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-stack gap=\"0.75rem\" vertical>\n  <plus-breadcrumb separator=\"/\" [max]=\"4\" [offset]=\"0\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" [max]=\"4\" [offset]=\"2\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" [max]=\"4\" [offset]=\"-1\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n</plus-stack>\n"
  },
  {
    "key": "javascript/breadcrumb/limitation",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-stack gap=\"0.75rem\" vertical>\n  <plus-breadcrumb separator=\"/\" max=\"4\" offset=\"0\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" max=\"4\" offset=\"2\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" max=\"4\" offset=\"-1\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n</plus-stack>\n"
  },
  {
    "key": "react/breadcrumb/limitation",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"0.75rem\" vertical>\n      <plus-breadcrumb separator=\"/\" max={4} offset={0}>\n        <a href=\"#\">Item 1</a>\n        <a href=\"#\">Item 2</a>\n        <a href=\"#\">Item 3</a>\n        <a href=\"#\">Item 4</a>\n        <a href=\"#\">Item 5</a>\n        <a href=\"#\">Item 6</a>\n        <a href=\"#\">Item 7</a>\n        <a href=\"#\">Item 8</a>\n      </plus-breadcrumb>\n      <plus-breadcrumb separator=\"/\" max={4} offset={2}>\n        <a href=\"#\">Item 1</a>\n        <a href=\"#\">Item 2</a>\n        <a href=\"#\">Item 3</a>\n        <a href=\"#\">Item 4</a>\n        <a href=\"#\">Item 5</a>\n        <a href=\"#\">Item 6</a>\n        <a href=\"#\">Item 7</a>\n        <a href=\"#\">Item 8</a>\n      </plus-breadcrumb>\n      <plus-breadcrumb separator=\"/\" max={4} offset={-1}>\n        <a href=\"#\">Item 1</a>\n        <a href=\"#\">Item 2</a>\n        <a href=\"#\">Item 3</a>\n        <a href=\"#\">Item 4</a>\n        <a href=\"#\">Item 5</a>\n        <a href=\"#\">Item 6</a>\n        <a href=\"#\">Item 7</a>\n        <a href=\"#\">Item 8</a>\n      </plus-breadcrumb>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/limitation",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"0.75rem\" vertical>\n      <plus-breadcrumb separator=\"/\" max={4} offset={0}>\n        <a href=\"#\">Item 1</a>\n        <a href=\"#\">Item 2</a>\n        <a href=\"#\">Item 3</a>\n        <a href=\"#\">Item 4</a>\n        <a href=\"#\">Item 5</a>\n        <a href=\"#\">Item 6</a>\n        <a href=\"#\">Item 7</a>\n        <a href=\"#\">Item 8</a>\n      </plus-breadcrumb>\n      <plus-breadcrumb separator=\"/\" max={4} offset={2}>\n        <a href=\"#\">Item 1</a>\n        <a href=\"#\">Item 2</a>\n        <a href=\"#\">Item 3</a>\n        <a href=\"#\">Item 4</a>\n        <a href=\"#\">Item 5</a>\n        <a href=\"#\">Item 6</a>\n        <a href=\"#\">Item 7</a>\n        <a href=\"#\">Item 8</a>\n      </plus-breadcrumb>\n      <plus-breadcrumb separator=\"/\" max={4} offset={-1}>\n        <a href=\"#\">Item 1</a>\n        <a href=\"#\">Item 2</a>\n        <a href=\"#\">Item 3</a>\n        <a href=\"#\">Item 4</a>\n        <a href=\"#\">Item 5</a>\n        <a href=\"#\">Item 6</a>\n        <a href=\"#\">Item 7</a>\n        <a href=\"#\">Item 8</a>\n      </plus-breadcrumb>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/limitation",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-stack gap=\"0.75rem\" vertical>\n  <plus-breadcrumb separator=\"/\" max={4} offset={0}>\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" max={4} offset={2}>\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" max={4} offset={-1}>\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n</plus-stack>\n"
  },
  {
    "key": "vue/breadcrumb/limitation",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-stack gap=\"0.75rem\" vertical>\n  <plus-breadcrumb separator=\"/\" :max=\"4\" :offset=\"0\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" :max=\"4\" :offset=\"2\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n  <plus-breadcrumb separator=\"/\" :max=\"4\" :offset=\"-1\">\n    <a href=\"#\">Item 1</a>\n    <a href=\"#\">Item 2</a>\n    <a href=\"#\">Item 3</a>\n    <a href=\"#\">Item 4</a>\n    <a href=\"#\">Item 5</a>\n    <a href=\"#\">Item 6</a>\n    <a href=\"#\">Item 7</a>\n    <a href=\"#\">Item 8</a>\n  </plus-breadcrumb>\n</plus-stack>\n"
  },
  {
    "key": "angular/breadcrumb/separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\">\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "javascript/breadcrumb/separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\">\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "react/breadcrumb/separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"-\">\n        <a href=\"#\">First</a>\n        <a href=\"#\">Second</a>\n        <a href=\"#\">Third</a>\n        <a href=\"#\">Fourth</a>\n        <a href=\"#\">Fifth</a>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"-\">\n        <a href=\"#\">First</a>\n        <a href=\"#\">Second</a>\n        <a href=\"#\">Third</a>\n        <a href=\"#\">Fourth</a>\n        <a href=\"#\">Fifth</a>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\">\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "vue/breadcrumb/separator",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"-\">\n    <a href=\"#\">First</a>\n    <a href=\"#\">Second</a>\n    <a href=\"#\">Third</a>\n    <a href=\"#\">Fourth</a>\n    <a href=\"#\">Fifth</a>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "angular/breadcrumb/with-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <div>\n      <plus-icon name=\"house\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">HTMLPLUS</a>\n    </div>\n    <div>\n      <plus-icon name=\"brush\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">UI</a>\n    </div>\n    <div>\n      <plus-icon name=\"puzzle\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">Elements</a>\n    </div>\n    <div>Breadcrumb</div>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "javascript/breadcrumb/with-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <div>\n      <plus-icon name=\"house\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">HTMLPLUS</a>\n    </div>\n    <div>\n      <plus-icon name=\"brush\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">UI</a>\n    </div>\n    <div>\n      <plus-icon name=\"puzzle\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">Elements</a>\n    </div>\n    <div>Breadcrumb</div>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "react/breadcrumb/with-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"/\">\n        <div>\n          <plus-icon name=\"house\"></plus-icon>\n          &nbsp;\n          <a href=\"#\">HTMLPLUS</a>\n        </div>\n        <div>\n          <plus-icon name=\"brush\"></plus-icon>\n          &nbsp;\n          <a href=\"#\">UI</a>\n        </div>\n        <div>\n          <plus-icon name=\"puzzle\"></plus-icon>\n          &nbsp;\n          <a href=\"#\">Elements</a>\n        </div>\n        <div>Breadcrumb</div>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "react-experimental/breadcrumb/with-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-breadcrumb separator=\"/\">\n        <div>\n          <plus-icon name=\"house\"></plus-icon>\n          &nbsp;\n          <a href=\"#\">HTMLPLUS</a>\n        </div>\n        <div>\n          <plus-icon name=\"brush\"></plus-icon>\n          &nbsp;\n          <a href=\"#\">UI</a>\n        </div>\n        <div>\n          <plus-icon name=\"puzzle\"></plus-icon>\n          &nbsp;\n          <a href=\"#\">Elements</a>\n        </div>\n        <div>Breadcrumb</div>\n      </plus-breadcrumb>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n"
  },
  {
    "key": "svelte/breadcrumb/with-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <div>\n      <plus-icon name=\"house\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">HTMLPLUS</a>\n    </div>\n    <div>\n      <plus-icon name=\"brush\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">UI</a>\n    </div>\n    <div>\n      <plus-icon name=\"puzzle\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">Elements</a>\n    </div>\n    <div>Breadcrumb</div>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "vue/breadcrumb/with-icon",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/breadcrumb.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "style": "plus-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n}\nplus-breadcrumb a:hover {\n  text-decoration: underline;\n}\n",
    "template": "<plus-center>\n  <plus-breadcrumb separator=\"/\">\n    <div>\n      <plus-icon name=\"house\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">HTMLPLUS</a>\n    </div>\n    <div>\n      <plus-icon name=\"brush\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">UI</a>\n    </div>\n    <div>\n      <plus-icon name=\"puzzle\"></plus-icon>\n      &nbsp;\n      <a href=\"#\">Elements</a>\n    </div>\n    <div>Breadcrumb</div>\n  </plus-breadcrumb>\n</plus-center>\n"
  },
  {
    "key": "angular/browse/accept",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-browse accept=\".jpg, .pdf, video/*\">\n    Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "javascript/browse/accept",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-browse id=\"$browse\" accept=\".jpg, .pdf, video/*\">\n    Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "react/browse/accept",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-browse accept=\".jpg, .pdf, video/*\">\n        Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/browse/accept",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-browse accept=\".jpg, .pdf, video/*\">\n        Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/browse/accept",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-browse accept=\".jpg, .pdf, video/*\">\n    Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "vue/browse/accept",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n",
    "template": "<plus-center>\n  <plus-browse accept=\".jpg, .pdf, video/*\">\n    Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "angular/browse/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    console.log(event.detail);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse (plus-change)=\"onPlusChange($event)\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "javascript/browse/default",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n$browse.addEventListener('plus-change', (event) => {\n  console.log(event.detail);\n});\n",
    "template": "<plus-center>\n  <plus-browse id=\"$browse\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "react/browse/default",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const browseRef = useRef();\n  useEffect(() => {\n    if (!browseRef.current) return;\n    function onPlusChange(event) {\n      console.log(event.detail);\n    }\n    browseRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!browseRef.current) return;\n      browseRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-browse ref={browseRef}> Click Here </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/browse/default",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    console.log(event.detail);\n  }\n  return (\n    <plus-center>\n      <plus-browse onplus-change={onPlusChange}> Click Here </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/browse/default",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  console.log(event.detail);\n}\n",
    "template": "<plus-center>\n  <plus-browse on:plus-change={onPlusChange}> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "vue/browse/default",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  console.log(event.detail);\n}\n",
    "template": "<plus-center>\n  <plus-browse @plus-change=\"onPlusChange\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "angular/browse/disabled",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange() {\n    alert('File selected.');\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse disabled (plus-change)=\"onPlusChange()\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "javascript/browse/disabled",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n$browse.addEventListener('plus-change', () => {\n  alert('File selected.');\n});\n",
    "template": "<plus-center>\n  <plus-browse id=\"$browse\" disabled> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "react/browse/disabled",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const browseRef = useRef();\n  useEffect(() => {\n    if (!browseRef.current) return;\n    function onPlusChange() {\n      alert('File selected.');\n    }\n    browseRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!browseRef.current) return;\n      browseRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-browse disabled ref={browseRef}>\n        {' '}\n        Click Here{' '}\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/browse/disabled",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  function onPlusChange() {\n    alert('File selected.');\n  }\n  return (\n    <plus-center>\n      <plus-browse disabled onplus-change={onPlusChange}>\n        {' '}\n        Click Here{' '}\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/browse/disabled",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange() {\n  alert('File selected.');\n}\n",
    "template": "<plus-center>\n  <plus-browse disabled on:plus-change={onPlusChange}> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "vue/browse/disabled",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange() {\n  alert('File selected.');\n}\n",
    "template": "<plus-center>\n  <plus-browse disabled @plus-change=\"onPlusChange\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "angular/browse/droppable",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    const name = event.detail.files[0].file.name;\n    alert(`File '${name}' selected.`);\n  }\n}\n",
    "style": "plus-browse {\n  background: white;\n  border: 2px dashed lightgray;\n  border-radius: 4px;\n  display: block;\n  padding: 3rem;\n  text-align: center;\n}\nplus-browse[dragging]:not([dragging='false']) {\n  border-color: darkgray;\n}\n",
    "template": "<plus-browse droppable (plus-change)=\"onPlusChange($event)\">\n  Click or Drag & Drop a file(s) here\n</plus-browse>\n"
  },
  {
    "key": "javascript/browse/droppable",
    "script": "import '@htmlplus/ui/browse.js';\n\n$browse.addEventListener('plus-change', (event) => {\n  const name = event.detail.files[0].file.name;\n  alert(`File '${name}' selected.`);\n});\n",
    "style": "plus-browse {\n  background: white;\n  border: 2px dashed lightgray;\n  border-radius: 4px;\n  display: block;\n  padding: 3rem;\n  text-align: center;\n}\nplus-browse[dragging]:not([dragging='false']) {\n  border-color: darkgray;\n}\n",
    "template": "<plus-browse id=\"$browse\" droppable> Click or Drag & Drop a file(s) here </plus-browse>\n"
  },
  {
    "key": "react/browse/droppable",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/browse.js';\n\nfunction App() {\n  const browseRef = useRef();\n  useEffect(() => {\n    if (!browseRef.current) return;\n    function onPlusChange(event) {\n      const name = event.detail.files[0].file.name;\n      alert(`File '${name}' selected.`);\n    }\n    browseRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!browseRef.current) return;\n      browseRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-browse droppable ref={browseRef}>\n      {' '}\n      Click or Drag & Drop a file(s) here{' '}\n    </plus-browse>\n  );\n}\nexport default App;\n",
    "style": "plus-browse {\n  background: white;\n  border: 2px dashed lightgray;\n  border-radius: 4px;\n  display: block;\n  padding: 3rem;\n  text-align: center;\n}\nplus-browse[dragging]:not([dragging='false']) {\n  border-color: darkgray;\n}\n"
  },
  {
    "key": "react-experimental/browse/droppable",
    "script": "import '@htmlplus/ui/browse.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    const name = event.detail.files[0].file.name;\n    alert(`File '${name}' selected.`);\n  }\n  return (\n    <plus-browse droppable onplus-change={onPlusChange}>\n      {' '}\n      Click or Drag & Drop a file(s) here{' '}\n    </plus-browse>\n  );\n}\nexport default App;\n",
    "style": "plus-browse {\n  background: white;\n  border: 2px dashed lightgray;\n  border-radius: 4px;\n  display: block;\n  padding: 3rem;\n  text-align: center;\n}\nplus-browse[dragging]:not([dragging='false']) {\n  border-color: darkgray;\n}\n"
  },
  {
    "key": "svelte/browse/droppable",
    "script": "import '@htmlplus/ui/browse.js';\n\nfunction onPlusChange(event) {\n  const name = event.detail.files[0].file.name;\n  alert(`File '${name}' selected.`);\n}\n",
    "style": "plus-browse {\n  background: white;\n  border: 2px dashed lightgray;\n  border-radius: 4px;\n  display: block;\n  padding: 3rem;\n  text-align: center;\n}\nplus-browse[dragging]:not([dragging='false']) {\n  border-color: darkgray;\n}\n",
    "template": "<plus-browse droppable on:plus-change={onPlusChange}>\n  Click or Drag & Drop a file(s) here\n</plus-browse>\n"
  },
  {
    "key": "vue/browse/droppable",
    "script": "import '@htmlplus/ui/browse.js';\n\nfunction onPlusChange(event) {\n  const name = event.detail.files[0].file.name;\n  alert(`File '${name}' selected.`);\n}\n",
    "style": "plus-browse {\n  background: white;\n  border: 2px dashed lightgray;\n  border-radius: 4px;\n  display: block;\n  padding: 3rem;\n  text-align: center;\n}\nplus-browse[dragging]:not([dragging='false']) {\n  border-color: darkgray;\n}\n",
    "template": "<plus-browse droppable @plus-change=\"onPlusChange\">\n  Click or Drag & Drop a file(s) here\n</plus-browse>\n"
  },
  {
    "key": "angular/browse/min-and-max-size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    if (event.detail.files?.[0]?.errors.length) {\n      alert(event.detail.files[0].errors[0].message);\n    }\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse [min-size]=\"1000000\" [max-size]=\"5000000\" (plus-change)=\"onPlusChange($event)\">\n    Click Here\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "javascript/browse/min-and-max-size",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n$browse.addEventListener('plus-change', (event) => {\n  if (event.detail.files?.[0]?.errors.length) {\n    alert(event.detail.files[0].errors[0].message);\n  }\n});\n",
    "template": "<plus-center>\n  <plus-browse id=\"$browse\" min-size=\"1000000\" max-size=\"5000000\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "react/browse/min-and-max-size",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const browseRef = useRef();\n  useEffect(() => {\n    if (!browseRef.current) return;\n    function onPlusChange(event) {\n      if (event.detail.files?.[0]?.errors.length) {\n        alert(event.detail.files[0].errors[0].message);\n      }\n    }\n    browseRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!browseRef.current) return;\n      browseRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-browse min-size={1000000} max-size={5000000} ref={browseRef}>\n        {' '}\n        Click Here{' '}\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/browse/min-and-max-size",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    if (event.detail.files?.[0]?.errors.length) {\n      alert(event.detail.files[0].errors[0].message);\n    }\n  }\n  return (\n    <plus-center>\n      <plus-browse min-size={1000000} max-size={5000000} onplus-change={onPlusChange}>\n        {' '}\n        Click Here{' '}\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/browse/min-and-max-size",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  if (event.detail.files?.[0]?.errors.length) {\n    alert(event.detail.files[0].errors[0].message);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse min-size={1000000} max-size={5000000} on:plus-change={onPlusChange}>\n    Click Here\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "vue/browse/min-and-max-size",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  if (event.detail.files?.[0]?.errors.length) {\n    alert(event.detail.files[0].errors[0].message);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse :min-size=\"1000000\" :max-size=\"5000000\" @plus-change=\"onPlusChange\">\n    Click Here\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "angular/browse/min-and-max",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    if (event.detail.error) {\n      alert(event.detail.error.message);\n    }\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse [min]=\"3\" [max]=\"5\" multiple (plus-change)=\"onPlusChange($event)\">\n    Click Here\n  </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "javascript/browse/min-and-max",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n$browse.addEventListener('plus-change', (event) => {\n  if (event.detail.error) {\n    alert(event.detail.error.message);\n  }\n});\n",
    "template": "<plus-center>\n  <plus-browse id=\"$browse\" min=\"3\" max=\"5\" multiple> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "react/browse/min-and-max",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const browseRef = useRef();\n  useEffect(() => {\n    if (!browseRef.current) return;\n    function onPlusChange(event) {\n      if (event.detail.error) {\n        alert(event.detail.error.message);\n      }\n    }\n    browseRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!browseRef.current) return;\n      browseRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-browse min={3} max={5} multiple ref={browseRef}>\n        {' '}\n        Click Here{' '}\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/browse/min-and-max",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    if (event.detail.error) {\n      alert(event.detail.error.message);\n    }\n  }\n  return (\n    <plus-center>\n      <plus-browse min={3} max={5} multiple onplus-change={onPlusChange}>\n        {' '}\n        Click Here{' '}\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/browse/min-and-max",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  if (event.detail.error) {\n    alert(event.detail.error.message);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse min={3} max={5} multiple on:plus-change={onPlusChange}> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "vue/browse/min-and-max",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  if (event.detail.error) {\n    alert(event.detail.error.message);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse :min=\"3\" :max=\"5\" multiple @plus-change=\"onPlusChange\"> Click Here </plus-browse>\n</plus-center>\n"
  },
  {
    "key": "angular/browse/multiple",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    alert(`${event.detail.files.length} file(s) are selected.`);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-browse multiple (plus-change)=\"onPlusChange($event)\">Click Here</plus-browse>\n</plus-center>\n"
  },
  {
    "key": "javascript/browse/multiple",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\n$browse.addEventListener('plus-change', (event) => {\n  alert(`${event.detail.files.length} file(s) are selected.`);\n});\n",
    "template": "<plus-center>\n  <plus-browse id=\"$browse\" multiple>Click Here</plus-browse>\n</plus-center>\n"
  },
  {
    "key": "react/browse/multiple",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  const browseRef = useRef();\n  useEffect(() => {\n    if (!browseRef.current) return;\n    function onPlusChange(event) {\n      alert(`${event.detail.files.length} file(s) are selected.`);\n    }\n    browseRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!browseRef.current) return;\n      browseRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-browse multiple ref={browseRef}>\n        Click Here\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/browse/multiple",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    alert(`${event.detail.files.length} file(s) are selected.`);\n  }\n  return (\n    <plus-center>\n      <plus-browse multiple onplus-change={onPlusChange}>\n        Click Here\n      </plus-browse>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/browse/multiple",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  alert(`${event.detail.files.length} file(s) are selected.`);\n}\n",
    "template": "<plus-center>\n  <plus-browse multiple on:plus-change={onPlusChange}>Click Here</plus-browse>\n</plus-center>\n"
  },
  {
    "key": "vue/browse/multiple",
    "script": "import '@htmlplus/ui/browse.js';\nimport '@htmlplus/ui/center.js';\n\nfunction onPlusChange(event) {\n  alert(`${event.detail.files.length} file(s) are selected.`);\n}\n",
    "template": "<plus-center>\n  <plus-browse multiple @plus-change=\"onPlusChange\">Click Here</plus-browse>\n</plus-center>\n"
  },
  {
    "key": "angular/card/background-color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-background-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-background-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-background-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\"></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/card/background-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-background-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-background-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-background-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\"></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/card/background-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"pink\"></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"yellow\"></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"blue\"></plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-background-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-background-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-background-color: #80cbc4;\n}\n"
  },
  {
    "key": "react-experimental/card/background-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"pink\"></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"yellow\"></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"blue\"></plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-background-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-background-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-background-color: #80cbc4;\n}\n"
  },
  {
    "key": "svelte/card/background-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-background-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-background-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-background-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\"></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/card/background-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-background-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-background-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-background-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\"></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\"></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/card/border-color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-border-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-border-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-border-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/card/border-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-border-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-border-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-border-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/card/border-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"pink\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"yellow\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"blue\" outlined></plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-border-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-border-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-border-color: #80cbc4;\n}\n"
  },
  {
    "key": "react-experimental/card/border-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"pink\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"yellow\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"blue\" outlined></plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-border-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-border-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-border-color: #80cbc4;\n}\n"
  },
  {
    "key": "svelte/card/border-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-border-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-border-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-border-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/card/border-color",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.pink {\n  --plus-card-border-color: #ef9a9a;\n}\nplus-card.yellow {\n  --plus-card-border-color: #fff59d;\n}\nplus-card.blue {\n  --plus-card-border-color: #80cbc4;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"pink\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"yellow\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"blue\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/card/border-width",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.size-1 {\n  --plus-card-border-width: 1px;\n}\nplus-card.size-2 {\n  --plus-card-border-width: 2px;\n}\nplus-card.size-3 {\n  --plus-card-border-width: 3px;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-1\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-2\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-3\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/card/border-width",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.size-1 {\n  --plus-card-border-width: 1px;\n}\nplus-card.size-2 {\n  --plus-card-border-width: 2px;\n}\nplus-card.size-3 {\n  --plus-card-border-width: 3px;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-1\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-2\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-3\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/card/border-width",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"size-1\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"size-2\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card class=\"size-3\" outlined></plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.size-1 {\n  --plus-card-border-width: 1px;\n}\nplus-card.size-2 {\n  --plus-card-border-width: 2px;\n}\nplus-card.size-3 {\n  --plus-card-border-width: 3px;\n}\n"
  },
  {
    "key": "react-experimental/card/border-width",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"evenly\" gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"size-1\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"size-2\" outlined></plus-card>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"auto\">\n        <plus-card className=\"size-3\" outlined></plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.size-1 {\n  --plus-card-border-width: 1px;\n}\nplus-card.size-2 {\n  --plus-card-border-width: 2px;\n}\nplus-card.size-3 {\n  --plus-card-border-width: 3px;\n}\n"
  },
  {
    "key": "svelte/card/border-width",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.size-1 {\n  --plus-card-border-width: 1px;\n}\nplus-card.size-2 {\n  --plus-card-border-width: 2px;\n}\nplus-card.size-3 {\n  --plus-card-border-width: 3px;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-1\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-2\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-3\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/card/border-width",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\nplus-card.size-1 {\n  --plus-card-border-width: 1px;\n}\nplus-card.size-2 {\n  --plus-card-border-width: 2px;\n}\nplus-card.size-3 {\n  --plus-card-border-width: 3px;\n}\n",
    "template": "<plus-grid justify-content=\"evenly\" gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-1\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-2\" outlined></plus-card>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"auto\">\n    <plus-card class=\"size-3\" outlined></plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/card/customized",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  --plus-card-border-radius: 3rem 0;\n  --plus-card-border-width: 2px;\n  --plus-card-border-color: darkgray;\n  --plus-card-background-color: lightgray;\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card [elevation]=\"12\" outlined></plus-card>\n"
  },
  {
    "key": "javascript/card/customized",
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  --plus-card-border-radius: 3rem 0;\n  --plus-card-border-width: 2px;\n  --plus-card-border-color: darkgray;\n  --plus-card-background-color: lightgray;\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card elevation=\"12\" outlined></plus-card>\n"
  },
  {
    "key": "react/card/customized",
    "script": "import '@htmlplus/ui/card.js';\n\nfunction App() {\n  return <plus-card elevation={12} outlined></plus-card>;\n}\nexport default App;\n",
    "style": "plus-card {\n  --plus-card-border-radius: 3rem 0;\n  --plus-card-border-width: 2px;\n  --plus-card-border-color: darkgray;\n  --plus-card-background-color: lightgray;\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/card/customized",
    "script": "import '@htmlplus/ui/card.js';\n\nfunction App() {\n  return <plus-card elevation={12} outlined></plus-card>;\n}\nexport default App;\n",
    "style": "plus-card {\n  --plus-card-border-radius: 3rem 0;\n  --plus-card-border-width: 2px;\n  --plus-card-border-color: darkgray;\n  --plus-card-background-color: lightgray;\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/card/customized",
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  --plus-card-border-radius: 3rem 0;\n  --plus-card-border-width: 2px;\n  --plus-card-border-color: darkgray;\n  --plus-card-background-color: lightgray;\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card elevation={12} outlined></plus-card>\n"
  },
  {
    "key": "vue/card/customized",
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  --plus-card-border-radius: 3rem 0;\n  --plus-card-border-width: 2px;\n  --plus-card-border-color: darkgray;\n  --plus-card-background-color: lightgray;\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card :elevation=\"12\" outlined></plus-card>\n"
  },
  {
    "key": "angular/card/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-card></plus-card>\n</div>\n"
  },
  {
    "key": "javascript/card/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-card></plus-card>\n</div>\n"
  },
  {
    "key": "react/card/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-card></plus-card>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/card/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-card></plus-card>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/card/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-card></plus-card>\n</div>\n"
  },
  {
    "key": "vue/card/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-card></plus-card>\n</div>\n"
  },
  {
    "key": "angular/card/elevation",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  elevation = 24;\n  onChange(event) {\n    this.elevation = event.target.value;\n  }\n}\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\ninput[type='range'] {\n  display: block;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card [elevation]=\"elevation\"></plus-card>\n<br />\n<input type=\"range\" min=\"1\" max=\"24\" (change)=\"onChange($event)\" />\n"
  },
  {
    "key": "javascript/card/elevation",
    "script": "import '@htmlplus/ui/card.js';\n\n$input.addEventListener('change', (event) => {\n  $card.elevation = event.target.value;\n});\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\ninput[type='range'] {\n  display: block;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card id=\"$card\" elevation=\"24\"></plus-card>\n<br />\n<input id=\"$input\" type=\"range\" min=\"1\" max=\"24\" />\n"
  },
  {
    "key": "react/card/elevation",
    "script": "import { useState } from 'react';\n\nimport '@htmlplus/ui/card.js';\n\nfunction App() {\n  const [elevation, setElevation] = useState(24);\n  function onChange(event) {\n    setElevation(event.target.value);\n  }\n  return (\n    <>\n      <plus-card elevation={elevation}></plus-card>\n      <br />\n      <input type=\"range\" min=\"1\" max=\"24\" onChange={onChange} />\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\ninput[type='range'] {\n  display: block;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/card/elevation",
    "script": "import { useState } from 'react';\n\nimport '@htmlplus/ui/card.js';\n\nfunction App() {\n  const [elevation, setElevation] = useState(24);\n  function onChange(event) {\n    setElevation(event.target.value);\n  }\n  return (\n    <>\n      <plus-card elevation={elevation}></plus-card>\n      <br />\n      <input type=\"range\" min=\"1\" max=\"24\" onchange={onChange} />\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\ninput[type='range'] {\n  display: block;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/card/elevation",
    "script": "import '@htmlplus/ui/card.js';\n\nlet elevation = 24;\nfunction onChange(event) {\n  elevation = event.target.value;\n}\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\ninput[type='range'] {\n  display: block;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card {elevation}></plus-card>\n<br />\n<input type=\"range\" min=\"1\" max=\"24\" on:change={onChange} />\n"
  },
  {
    "key": "vue/card/elevation",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/card.js';\n\nconst elevation = ref(24);\nfunction onChange(event) {\n  elevation.value = event.target.value;\n}\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\ninput[type='range'] {\n  display: block;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<div>\n  <plus-card :elevation=\"elevation\"></plus-card>\n  <br />\n  <input type=\"range\" min=\"1\" max=\"24\" @change=\"onChange\" />\n</div>\n"
  },
  {
    "key": "angular/card/outlined",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card outlined></plus-card>\n"
  },
  {
    "key": "javascript/card/outlined",
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card outlined></plus-card>\n"
  },
  {
    "key": "react/card/outlined",
    "script": "import '@htmlplus/ui/card.js';\n\nfunction App() {\n  return <plus-card outlined></plus-card>;\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/card/outlined",
    "script": "import '@htmlplus/ui/card.js';\n\nfunction App() {\n  return <plus-card outlined></plus-card>;\n}\nexport default App;\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/card/outlined",
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card outlined></plus-card>\n"
  },
  {
    "key": "vue/card/outlined",
    "script": "import '@htmlplus/ui/card.js';\n",
    "style": "plus-card {\n  height: 12rem;\n  width: 12rem;\n  margin: auto;\n}\n",
    "template": "<plus-card outlined></plus-card>\n"
  },
  {
    "key": "angular/card/tile",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-grid justify-content=\"evenly\" gutter=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile outlined></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile [elevation]=\"5\"></plus-card>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "javascript/card/tile",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-grid justify-content=\"evenly\" gutter=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile outlined></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile elevation=\"5\"></plus-card>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "react/card/tile",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-grid justify-content=\"evenly\" gutter=\"md\">\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-card tile></plus-card>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-card tile outlined></plus-card>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-card tile elevation={5}></plus-card>\n        </plus-grid-item>\n      </plus-grid>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "react-experimental/card/tile",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-grid justify-content=\"evenly\" gutter=\"md\">\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-card tile></plus-card>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-card tile outlined></plus-card>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" sm=\"auto\">\n          <plus-card tile elevation={5}></plus-card>\n        </plus-grid-item>\n      </plus-grid>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\n"
  },
  {
    "key": "svelte/card/tile",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-grid justify-content=\"evenly\" gutter=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile outlined></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile elevation={5}></plus-card>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "vue/card/tile",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": ".container {\n  padding: 2rem 0;\n  background-color: whitesmoke;\n}\nplus-card {\n  height: 8rem;\n  width: 8rem;\n  margin: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-grid justify-content=\"evenly\" gutter=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile outlined></plus-card>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"auto\">\n      <plus-card tile :elevation=\"5\"></plus-card>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "angular/center/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-center {\n  height: 10rem;\n  background-color: whitesmoke;\n}\n",
    "template": "<plus-center>All elements are centered</plus-center>\n"
  },
  {
    "key": "javascript/center/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\n",
    "style": "plus-center {\n  height: 10rem;\n  background-color: whitesmoke;\n}\n",
    "template": "<plus-center>All elements are centered</plus-center>\n"
  },
  {
    "key": "react/center/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\n\nfunction App() {\n  return <plus-center>All elements are centered</plus-center>;\n}\nexport default App;\n",
    "style": "plus-center {\n  height: 10rem;\n  background-color: whitesmoke;\n}\n"
  },
  {
    "key": "react-experimental/center/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\n\nfunction App() {\n  return <plus-center>All elements are centered</plus-center>;\n}\nexport default App;\n",
    "style": "plus-center {\n  height: 10rem;\n  background-color: whitesmoke;\n}\n"
  },
  {
    "key": "svelte/center/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\n",
    "style": "plus-center {\n  height: 10rem;\n  background-color: whitesmoke;\n}\n",
    "template": "<plus-center>All elements are centered</plus-center>\n"
  },
  {
    "key": "vue/center/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\n",
    "style": "plus-center {\n  height: 10rem;\n  background-color: whitesmoke;\n}\n",
    "template": "<plus-center>All elements are centered</plus-center>\n"
  },
  {
    "key": "angular/center/inline",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <button>\n    <plus-center inline>\n      <plus-icon name=\"list\" size=\"2x\"></plus-icon>\n      &nbsp; Menu\n    </plus-center>\n  </button>\n</plus-center>\n"
  },
  {
    "key": "javascript/center/inline",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <button>\n    <plus-center inline>\n      <plus-icon name=\"list\" size=\"2x\"></plus-icon>\n      &nbsp; Menu\n    </plus-center>\n  </button>\n</plus-center>\n"
  },
  {
    "key": "react/center/inline",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <button>\n        <plus-center inline>\n          <plus-icon name=\"list\" size=\"2x\"></plus-icon>\n          &nbsp; Menu\n        </plus-center>\n      </button>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/center/inline",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <button>\n        <plus-center inline>\n          <plus-icon name=\"list\" size=\"2x\"></plus-icon>\n          &nbsp; Menu\n        </plus-center>\n      </button>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/center/inline",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <button>\n    <plus-center inline>\n      <plus-icon name=\"list\" size=\"2x\"></plus-icon>\n      &nbsp; Menu\n    </plus-center>\n  </button>\n</plus-center>\n"
  },
  {
    "key": "vue/center/inline",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <button>\n    <plus-center inline>\n      <plus-icon name=\"list\" size=\"2x\"></plus-icon>\n      &nbsp; Menu\n    </plus-center>\n  </button>\n</plus-center>\n"
  },
  {
    "key": "angular/click-outside/default",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/click-outside.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('outside')\n  outsideRef!: ElementRef;\n  @ViewChild('inside')\n  insideRef!: ElementRef;\n  inside = 0;\n  outside = 0;\n  onClick() {\n    const count = this.inside + 1;\n    this.inside = count;\n    this.insideRef.nativeElement.innerHTML = `${count}`;\n  }\n  onPlusClickOutside() {\n    const count = this.outside + 1;\n    this.outside = count;\n    this.outsideRef.nativeElement.innerHTML = `${count}`;\n  }\n}\n",
    "template": "<plus-click-outside (click)=\"onClick()\" (plus-click-outside)=\"onPlusClickOutside()\">\n  <plus-card [elevation]=\"10\">\n    <plus-card-body>\n      <b #inside>0</b> time(s) inside clicked\n      <br />\n      <b #outside>0</b> time(s) outside clicked\n    </plus-card-body>\n  </plus-card>\n</plus-click-outside>\n"
  },
  {
    "key": "javascript/click-outside/default",
    "script": "import '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/click-outside.js';\n\nlet inside = 0;\nlet outside = 0;\n$clickOutside.addEventListener('click', () => {\n  const count = inside + 1;\n  inside = count;\n  $inside.innerHTML = `${count}`;\n});\n$clickOutside.addEventListener('plus-click-outside', () => {\n  const count = outside + 1;\n  outside = count;\n  $outside.innerHTML = `${count}`;\n});\n",
    "template": "<plus-click-outside id=\"$clickOutside\">\n  <plus-card elevation=\"10\">\n    <plus-card-body>\n      <b id=\"$inside\">0</b> time(s) inside clicked\n      <br />\n      <b id=\"$outside\">0</b> time(s) outside clicked\n    </plus-card-body>\n  </plus-card>\n</plus-click-outside>\n"
  },
  {
    "key": "react/click-outside/default",
    "script": "import { useEffect, useRef, useState } from 'react';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/click-outside.js';\n\nfunction App() {\n  const outsideRef = useRef();\n  const insideRef = useRef();\n  const clickOutsideRef = useRef();\n  const [inside, setInside] = useState(0);\n  const [outside, setOutside] = useState(0);\n  useEffect(() => {\n    if (!clickOutsideRef.current) return;\n    function onClick() {\n      const count = inside + 1;\n      setInside(count);\n      insideRef.current.innerHTML = `${count}`;\n    }\n    clickOutsideRef.current.addEventListener('click', onClick);\n    return () => {\n      if (!clickOutsideRef.current) return;\n      clickOutsideRef.current.removeEventListener('click', onClick);\n    };\n  });\n  useEffect(() => {\n    if (!clickOutsideRef.current) return;\n    function onPlusClickOutside() {\n      const count = outside + 1;\n      setOutside(count);\n      outsideRef.current.innerHTML = `${count}`;\n    }\n    clickOutsideRef.current.addEventListener('plus-click-outside', onPlusClickOutside);\n    return () => {\n      if (!clickOutsideRef.current) return;\n      clickOutsideRef.current.removeEventListener('plus-click-outside', onPlusClickOutside);\n    };\n  });\n  return (\n    <plus-click-outside ref={clickOutsideRef}>\n      <plus-card elevation={10}>\n        <plus-card-body>\n          <b ref={insideRef}>0</b> time(s) inside clicked\n          <br />\n          <b ref={outsideRef}>0</b> time(s) outside clicked\n        </plus-card-body>\n      </plus-card>\n    </plus-click-outside>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/click-outside/default",
    "script": "import { useRef, useState } from 'react';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/click-outside.js';\n\nfunction App() {\n  const outsideRef = useRef();\n  const insideRef = useRef();\n  const [inside, setInside] = useState(0);\n  const [outside, setOutside] = useState(0);\n  function onClick() {\n    const count = inside + 1;\n    setInside(count);\n    insideRef.current.innerHTML = `${count}`;\n  }\n  function onPlusClickOutside() {\n    const count = outside + 1;\n    setOutside(count);\n    outsideRef.current.innerHTML = `${count}`;\n  }\n  return (\n    <plus-click-outside onclick={onClick} onplus-click-outside={onPlusClickOutside}>\n      <plus-card elevation={10}>\n        <plus-card-body>\n          <b ref={insideRef}>0</b> time(s) inside clicked\n          <br />\n          <b ref={outsideRef}>0</b> time(s) outside clicked\n        </plus-card-body>\n      </plus-card>\n    </plus-click-outside>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/click-outside/default",
    "script": "import '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/click-outside.js';\n\nlet outsideRef;\nlet insideRef;\nlet inside = 0;\nlet outside = 0;\nfunction onClick() {\n  const count = inside + 1;\n  inside = count;\n  insideRef.innerHTML = `${count}`;\n}\nfunction onPlusClickOutside() {\n  const count = outside + 1;\n  outside = count;\n  outsideRef.innerHTML = `${count}`;\n}\n",
    "template": "<plus-click-outside on:click={onClick} on:plus-click-outside={onPlusClickOutside}>\n  <plus-card elevation={10}>\n    <plus-card-body>\n      <b bind:this={insideRef}>0</b> time(s) inside clicked\n      <br />\n      <b bind:this={outsideRef}>0</b> time(s) outside clicked\n    </plus-card-body>\n  </plus-card>\n</plus-click-outside>\n"
  },
  {
    "key": "vue/click-outside/default",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/click-outside.js';\n\nconst outsideRef = ref();\nconst insideRef = ref();\nconst inside = ref(0);\nconst outside = ref(0);\nfunction onClick() {\n  const count = inside.value + 1;\n  inside.value = count;\n  insideRef.value.innerHTML = `${count}`;\n}\nfunction onPlusClickOutside() {\n  const count = outside.value + 1;\n  outside.value = count;\n  outsideRef.value.innerHTML = `${count}`;\n}\n",
    "template": "<plus-click-outside @click=\"onClick\" @plus-click-outside=\"onPlusClickOutside\">\n  <plus-card :elevation=\"10\">\n    <plus-card-body>\n      <b ref=\"insideRef\">0</b> time(s) inside clicked\n      <br />\n      <b ref=\"outsideRef\">0</b> time(s) outside clicked\n    </plus-card-body>\n  </plus-card>\n</plus-click-outside>\n"
  },
  {
    "key": "angular/click-outside/menu",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/click-outside.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  hidden = true;\n  onClick() {\n    this.hidden = !this.hidden;\n  }\n  onPlusClickOutside() {\n    this.hidden = true;\n  }\n}\n",
    "style": "plus-card {\n  position: absolute;\n  top: calc(100% + 0.25rem);\n}\nplus-click-outside {\n  display: inline-block;\n  position: relative;\n}\n",
    "template": "<plus-center>\n  <plus-click-outside (plus-click-outside)=\"onPlusClickOutside()\">\n    <button (click)=\"onClick()\">Open Menu Dropdown</button>\n    <plus-card [elevation]=\"10\" outlined [hidden]=\"hidden\">\n      <plus-card-body> It will stay visible until you click outside. </plus-card-body>\n    </plus-card>\n  </plus-click-outside>\n</plus-center>\n"
  },
  {
    "key": "javascript/click-outside/menu",
    "script": "import '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/click-outside.js';\n\n$button.addEventListener('click', () => {\n  $menu.hidden = !$menu.hidden;\n});\n$clickOutside.addEventListener('plus-click-outside', () => {\n  $menu.hidden = true;\n});\n",
    "style": "plus-card {\n  position: absolute;\n  top: calc(100% + 0.25rem);\n}\nplus-click-outside {\n  display: inline-block;\n  position: relative;\n}\n",
    "template": "<plus-center>\n  <plus-click-outside id=\"$clickOutside\">\n    <button id=\"$button\">Open Menu Dropdown</button>\n    <plus-card elevation=\"10\" id=\"$menu\" hidden outlined>\n      <plus-card-body> It will stay visible until you click outside. </plus-card-body>\n    </plus-card>\n  </plus-click-outside>\n</plus-center>\n"
  },
  {
    "key": "react/click-outside/menu",
    "script": "import { useEffect, useRef, useState } from 'react';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/click-outside.js';\n\nfunction App() {\n  const clickOutsideRef = useRef();\n  const [hidden, setHidden] = useState(true);\n  function onClick() {\n    setHidden(!hidden);\n  }\n  useEffect(() => {\n    if (!clickOutsideRef.current) return;\n    function onPlusClickOutside() {\n      setHidden(true);\n    }\n    clickOutsideRef.current.addEventListener('plus-click-outside', onPlusClickOutside);\n    return () => {\n      if (!clickOutsideRef.current) return;\n      clickOutsideRef.current.removeEventListener('plus-click-outside', onPlusClickOutside);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-click-outside ref={clickOutsideRef}>\n        <button onClick={onClick}>Open Menu Dropdown</button>\n        <plus-card elevation={10} hidden={hidden} outlined>\n          <plus-card-body> It will stay visible until you click outside. </plus-card-body>\n        </plus-card>\n      </plus-click-outside>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  position: absolute;\n  top: calc(100% + 0.25rem);\n}\nplus-click-outside {\n  display: inline-block;\n  position: relative;\n}\n"
  },
  {
    "key": "react-experimental/click-outside/menu",
    "script": "import { useState } from 'react';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/click-outside.js';\n\nfunction App() {\n  const [hidden, setHidden] = useState(true);\n  function onClick() {\n    setHidden(!hidden);\n  }\n  function onPlusClickOutside() {\n    setHidden(true);\n  }\n  return (\n    <plus-center>\n      <plus-click-outside onplus-click-outside={onPlusClickOutside}>\n        <button onclick={onClick}>Open Menu Dropdown</button>\n        <plus-card elevation={10} hidden={hidden} outlined>\n          <plus-card-body> It will stay visible until you click outside. </plus-card-body>\n        </plus-card>\n      </plus-click-outside>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  position: absolute;\n  top: calc(100% + 0.25rem);\n}\nplus-click-outside {\n  display: inline-block;\n  position: relative;\n}\n"
  },
  {
    "key": "svelte/click-outside/menu",
    "script": "import '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/click-outside.js';\n\nlet hidden = true;\nfunction onClick() {\n  hidden = !hidden;\n}\nfunction onPlusClickOutside() {\n  hidden = true;\n}\n",
    "style": "plus-card {\n  position: absolute;\n  top: calc(100% + 0.25rem);\n}\nplus-click-outside {\n  display: inline-block;\n  position: relative;\n}\n",
    "template": "<plus-center>\n  <plus-click-outside on:plus-click-outside={onPlusClickOutside}>\n    <button on:click={onClick}>Open Menu Dropdown</button>\n    <plus-card elevation={10} {hidden} outlined>\n      <plus-card-body> It will stay visible until you click outside. </plus-card-body>\n    </plus-card>\n  </plus-click-outside>\n</plus-center>\n"
  },
  {
    "key": "vue/click-outside/menu",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/click-outside.js';\n\nconst hidden = ref(true);\nfunction onClick() {\n  hidden.value = !hidden.value;\n}\nfunction onPlusClickOutside() {\n  hidden.value = true;\n}\n",
    "style": "plus-card {\n  position: absolute;\n  top: calc(100% + 0.25rem);\n}\nplus-click-outside {\n  display: inline-block;\n  position: relative;\n}\n",
    "template": "<plus-center>\n  <plus-click-outside @plus-click-outside=\"onPlusClickOutside\">\n    <button @click=\"onClick\">Open Menu Dropdown</button>\n    <plus-card :elevation=\"10\" outlined :hidden=\"hidden\">\n      <plus-card-body> It will stay visible until you click outside. </plus-card-body>\n    </plus-card>\n  </plus-click-outside>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/decimal",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter decimal=\"/\" [decimals]=\"3\" [to]=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter decimal=\"/\" decimals=\"3\" to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter decimal=\"/\" decimals={3} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter decimal=\"/\" decimals={3} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter decimal=\"/\" decimals={3} to={1000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter decimal=\"/\" :decimals=\"3\" :to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter [to]=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter to={1000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter :to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/delay",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter [delay]=\"1500\" [to]=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/delay",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter delay=\"1500\" to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/delay",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter delay={1500} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/delay",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter delay={1500} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/delay",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter delay={1500} to={1000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/delay",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter :delay=\"1500\" :to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/duration",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter [duration]=\"5000\" [to]=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/duration",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter duration=\"5000\" to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/duration",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter duration={5000} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/duration",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter duration={5000} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/duration",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter duration={5000} to={1000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/duration",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter :duration=\"5000\" :to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/counter.js';\nimport '@htmlplus/ui/intersection.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('counter')\n  counterRef!: ElementRef;\n  onPlusChange(event) {\n    this.counterRef.nativeElement.play = event.detail.isIntersecting;\n  }\n}\n",
    "style": "plus-intersection {\n  display: block;\n  text-align: center;\n  margin: 25rem auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection (plus-change)=\"onPlusChange($event)\">\n    <plus-counter [to]=\"1000\" #counter></plus-counter>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "javascript/counter/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/counter.js';\nimport '@htmlplus/ui/intersection.js';\n\n$intersection.addEventListener('plus-change', (event) => {\n  $counter.play = event.detail.isIntersecting;\n});\n",
    "style": "plus-intersection {\n  display: block;\n  text-align: center;\n  margin: 25rem auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection id=\"$intersection\">\n    <plus-counter id=\"$counter\" to=\"1000\"></plus-counter>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "react/counter/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/counter.js';\nimport '@htmlplus/ui/intersection.js';\n\nfunction App() {\n  const counterRef = useRef();\n  const intersectionRef = useRef();\n  useEffect(() => {\n    if (!intersectionRef.current) return;\n    function onPlusChange(event) {\n      counterRef.current.play = event.detail.isIntersecting;\n    }\n    intersectionRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!intersectionRef.current) return;\n      intersectionRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <div className=\"container\">\n      <plus-intersection ref={intersectionRef}>\n        <plus-counter to={1000} ref={counterRef}></plus-counter>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": "plus-intersection {\n  display: block;\n  text-align: center;\n  margin: 25rem auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n"
  },
  {
    "key": "react-experimental/counter/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/counter.js';\nimport '@htmlplus/ui/intersection.js';\n\nfunction App() {\n  const counterRef = useRef();\n  function onPlusChange(event) {\n    counterRef.current.play = event.detail.isIntersecting;\n  }\n  return (\n    <div className=\"container\">\n      <plus-intersection onplus-change={onPlusChange}>\n        <plus-counter to={1000} ref={counterRef}></plus-counter>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": "plus-intersection {\n  display: block;\n  text-align: center;\n  margin: 25rem auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n"
  },
  {
    "key": "svelte/counter/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/counter.js';\nimport '@htmlplus/ui/intersection.js';\n\nlet counterRef;\nfunction onPlusChange(event) {\n  counterRef.play = event.detail.isIntersecting;\n}\n",
    "style": "plus-intersection {\n  display: block;\n  text-align: center;\n  margin: 25rem auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection on:plus-change={onPlusChange}>\n    <plus-counter to={1000} bind:this={counterRef}></plus-counter>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "vue/counter/intersection",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/counter.js';\nimport '@htmlplus/ui/intersection.js';\n\nconst counterRef = ref();\nfunction onPlusChange(event) {\n  counterRef.value.play = event.detail.isIntersecting;\n}\n",
    "style": "plus-intersection {\n  display: block;\n  text-align: center;\n  margin: 25rem auto;\n}\n.container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection @plus-change=\"onPlusChange\">\n    <plus-counter :to=\"1000\" ref=\"counterRef\"></plus-counter>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "angular/counter/numerals",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];\n}\n",
    "template": "<plus-center>\n  <plus-counter [to]=\"1000\" play [numerals]=\"numerals\"></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/numerals",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n$counter.numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];\n",
    "template": "<plus-center>\n  <plus-counter id=\"$counter\" to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/numerals",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  const counterRef = useRef();\n  useEffect(() => {\n    counterRef.current.numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];\n  }, []);\n  return (\n    <plus-center>\n      <plus-counter to={1000} play ref={counterRef}></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/numerals",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  const numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];\n  return (\n    <plus-center>\n      <plus-counter to={1000} play numerals={numerals}></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/numerals",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nconst numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];\n",
    "template": "<plus-center>\n  <plus-counter to={1000} play {numerals}></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/numerals",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nconst numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];\n",
    "template": "<plus-center>\n  <plus-counter :to=\"1000\" play :numerals=\"numerals\"></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/range",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter [from]=\"10\" [to]=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/range",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter from=\"10\" to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/range",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter from={10} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/range",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter from={10} to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/range",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter from={10} to={1000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/range",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter :from=\"10\" :to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/reverse",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter [from]=\"1000\" [to]=\"10\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/reverse",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter from=\"1000\" to=\"10\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/reverse",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter from={1000} to={10} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/reverse",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter from={1000} to={10} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/reverse",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter from={1000} to={10} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/reverse",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter :from=\"1000\" :to=\"10\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/separator-decimal",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter decimal=\".\" [decimals]=\"2\" separator=\",\" [to]=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/separator-decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter decimal=\".\" decimals=\"2\" separator=\",\" to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/separator-decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter decimal=\".\" decimals={2} separator=\",\" to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/separator-decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter decimal=\".\" decimals={2} separator=\",\" to={1000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/separator-decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter decimal=\".\" decimals={2} separator=\",\" to={1000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/separator-decimal",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter decimal=\".\" :decimals=\"2\" separator=\",\" :to=\"1000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/counter/separator",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-counter separator=\",\" [to]=\"10000000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "javascript/counter/separator",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter separator=\",\" to=\"10000000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "react/counter/separator",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter separator=\",\" to={10000000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/counter/separator",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-counter separator=\",\" to={10000000} play></plus-counter>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/counter/separator",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter separator=\",\" to={10000000} play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "vue/counter/separator",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/counter.js';\n",
    "template": "<plus-center>\n  <plus-counter separator=\",\" :to=\"10000000\" play></plus-counter>\n</plus-center>\n"
  },
  {
    "key": "angular/cropper/area",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-cropper\n  [area]=\"1\"\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "javascript/cropper/area",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  area=\"1\"\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "react/cropper/area",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      area={1}\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/area",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      area={1}\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/area",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper area={1} src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "vue/cropper/area",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  :area=\"1\"\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "angular/cropper/aspect-ratio",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-cropper\n  aspect-ratio=\"3/4\"\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "javascript/cropper/aspect-ratio",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  aspect-ratio=\"3/4\"\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "react/cropper/aspect-ratio",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      aspect-ratio=\"3/4\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/aspect-ratio",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      aspect-ratio=\"3/4\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/aspect-ratio",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper aspect-ratio=\"3/4\" src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "vue/cropper/aspect-ratio",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  aspect-ratio=\"3/4\"\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "angular/cropper/background",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      background\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/background",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      background\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/background",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          view=\"none\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          background\n          view=\"none\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/background",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          view=\"none\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          background\n          view=\"none\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/background",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper view=\"none\" src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      background\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/background",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      background\n      view=\"none\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/cropper/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n"
  },
  {
    "key": "javascript/cropper/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n"
  },
  {
    "key": "react/cropper/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n"
  },
  {
    "key": "vue/cropper/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n"
  },
  {
    "key": "angular/cropper/dialog",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  disabled = true;\n  onPlusOpened() {\n    this.disabled = false;\n  }\n  onPlusClosed() {\n    this.disabled = true;\n  }\n}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-cropper\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog\n  animation=\"fade\"\n  connector=\"dialog-cropper\"\n  (plus-opened)=\"onPlusOpened()\"\n  (plus-closed)=\"onPlusClosed()\"\n>\n  <plus-dialog-content>\n    <plus-dialog-header> Cropper </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-cropper\n        src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        [disabled]=\"disabled\"\n      ></plus-cropper>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/cropper/dialog",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\n\n$dialog.addEventListener('plus-opened', () => {\n  $cropper.disabled = false;\n});\n$dialog.addEventListener('plus-closed', () => {\n  $cropper.disabled = true;\n});\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-cropper\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog id=\"$dialog\" animation=\"fade\" connector=\"dialog-cropper\">\n  <plus-dialog-content>\n    <plus-dialog-header> Cropper </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-cropper\n        id=\"$cropper\"\n        disabled\n        src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      ></plus-cropper>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/cropper/dialog",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef, useState } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\n\nfunction App() {\n  const dialogRef = useRef();\n  const [disabled, setDisabled] = useState(true);\n  useEffect(() => {\n    if (!dialogRef.current) return;\n    function onPlusOpened() {\n      setDisabled(false);\n    }\n    dialogRef.current.addEventListener('plus-opened', onPlusOpened);\n    return () => {\n      if (!dialogRef.current) return;\n      dialogRef.current.removeEventListener('plus-opened', onPlusOpened);\n    };\n  });\n  useEffect(() => {\n    if (!dialogRef.current) return;\n    function onPlusClosed() {\n      setDisabled(true);\n    }\n    dialogRef.current.addEventListener('plus-closed', onPlusClosed);\n    return () => {\n      if (!dialogRef.current) return;\n      dialogRef.current.removeEventListener('plus-closed', onPlusClosed);\n    };\n  });\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-cropper\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-cropper\" ref={dialogRef}>\n        <plus-dialog-content>\n          <plus-dialog-header> Cropper </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-cropper\n              disabled={disabled}\n              src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n            ></plus-cropper>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/dialog",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useState } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\n\nfunction App() {\n  const [disabled, setDisabled] = useState(true);\n  function onPlusOpened() {\n    setDisabled(false);\n  }\n  function onPlusClosed() {\n    setDisabled(true);\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-cropper\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog\n        animation=\"fade\"\n        connector=\"dialog-cropper\"\n        onplus-opened={onPlusOpened}\n        onplus-closed={onPlusClosed}\n      >\n        <plus-dialog-content>\n          <plus-dialog-header> Cropper </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-cropper\n              disabled={disabled}\n              src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n            ></plus-cropper>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/dialog",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\n\nlet disabled = true;\nfunction onPlusOpened() {\n  disabled = false;\n}\nfunction onPlusClosed() {\n  disabled = true;\n}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-cropper\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog\n  animation=\"fade\"\n  connector=\"dialog-cropper\"\n  on:plus-opened={onPlusOpened}\n  on:plus-closed={onPlusClosed}\n>\n  <plus-dialog-content>\n    <plus-dialog-header> Cropper </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-cropper {disabled} src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      ></plus-cropper>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/cropper/dialog",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\n\nconst disabled = ref(true);\nfunction onPlusOpened() {\n  disabled.value = false;\n}\nfunction onPlusClosed() {\n  disabled.value = true;\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-cropper\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog\n    animation=\"fade\"\n    connector=\"dialog-cropper\"\n    @plus-opened=\"onPlusOpened\"\n    @plus-closed=\"onPlusClosed\"\n  >\n    <plus-dialog-content>\n      <plus-dialog-header> Cropper </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          :disabled=\"disabled\"\n        ></plus-cropper>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/cropper/disabled",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-cropper\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n  disabled\n></plus-cropper>\n"
  },
  {
    "key": "javascript/cropper/disabled",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n  disabled\n></plus-cropper>\n"
  },
  {
    "key": "react/cropper/disabled",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      disabled\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/disabled",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      disabled\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/disabled",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\" disabled\n></plus-cropper>\n"
  },
  {
    "key": "vue/cropper/disabled",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n  disabled\n></plus-cropper>\n"
  },
  {
    "key": "angular/cropper/guides",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-cropper\n  guides\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "javascript/cropper/guides",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  guides\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "react/cropper/guides",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      guides\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/guides",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      guides\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/guides",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper guides src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "vue/cropper/guides",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  guides\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "angular/cropper/indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-cropper\n  indicator\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "javascript/cropper/indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  indicator\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "react/cropper/indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      indicator\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  return (\n    <plus-cropper\n      indicator\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper indicator src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "vue/cropper/indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/cropper.js';\n",
    "template": "<plus-cropper\n  indicator\n  src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n></plus-cropper>\n"
  },
  {
    "key": "angular/cropper/mode",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-cropper {\n  height: 18rem;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"move\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      view=\"none\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"crop\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/mode",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper {\n  height: 18rem;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"move\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      view=\"none\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"crop\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/mode",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          mode=\"move\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          view=\"none\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          mode=\"crop\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-cropper {\n  height: 18rem;\n}\n"
  },
  {
    "key": "react-experimental/cropper/mode",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          mode=\"move\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          view=\"none\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          mode=\"crop\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-cropper {\n  height: 18rem;\n}\n"
  },
  {
    "key": "svelte/cropper/mode",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper {\n  height: 18rem;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"move\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      view=\"none\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper mode=\"crop\" src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/mode",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper {\n  height: 18rem;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"move\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      view=\"none\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      mode=\"crop\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/cropper/shape",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-cropper[shape='rectangle'] {\n  height: 100%;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      shape=\"rectangle\"\n      aspect-ratio=\"2\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"square\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"circle\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/shape",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper[shape='rectangle'] {\n  height: 100%;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      shape=\"rectangle\"\n      aspect-ratio=\"2\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"square\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"circle\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/shape",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          shape=\"rectangle\"\n          aspect-ratio=\"2\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-grid gutter=\"md\">\n          <plus-grid-item xs=\"12\">\n            <plus-cropper\n              shape=\"square\"\n              src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n            ></plus-cropper>\n          </plus-grid-item>\n          <plus-grid-item xs=\"12\">\n            <plus-cropper\n              shape=\"circle\"\n              src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n            ></plus-cropper>\n          </plus-grid-item>\n        </plus-grid>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-cropper[shape='rectangle'] {\n  height: 100%;\n}\n"
  },
  {
    "key": "react-experimental/cropper/shape",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          shape=\"rectangle\"\n          aspect-ratio=\"2\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-grid gutter=\"md\">\n          <plus-grid-item xs=\"12\">\n            <plus-cropper\n              shape=\"square\"\n              src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n            ></plus-cropper>\n          </plus-grid-item>\n          <plus-grid-item xs=\"12\">\n            <plus-cropper\n              shape=\"circle\"\n              src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n            ></plus-cropper>\n          </plus-grid-item>\n        </plus-grid>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-cropper[shape='rectangle'] {\n  height: 100%;\n}\n"
  },
  {
    "key": "svelte/cropper/shape",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper[shape='rectangle'] {\n  height: 100%;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      shape=\"rectangle\"\n      aspect-ratio=\"2\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"square\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"circle\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/shape",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper[shape='rectangle'] {\n  height: 100%;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      shape=\"rectangle\"\n      aspect-ratio=\"2\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"square\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-cropper\n          shape=\"circle\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/cropper/styles",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-cropper {\n  height: 250px;\n}\nplus-cropper.style-1 {\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\nplus-cropper.style-2 {\n  --plus-cropper-indicator-color: #e6f018;\n  --plus-cropper-indicator-size: 15px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: black;\n  --plus-cropper-resizer-offset: -27px;\n  --plus-cropper-resizer-size: 21px;\n  --plus-cropper-viewport-color: #e6f018;\n}\nplus-cropper.style-3 {\n  --plus-cropper-indicator-color: #5499c7;\n  --plus-cropper-guides-color: black;\n  --plus-cropper-resizer-color: #5499c7;\n  --plus-cropper-resizer-size: 15px;\n  --plus-cropper-viewport-color: #5499c7;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-4 {\n  --plus-cropper-guides-weight: 2px;\n  --plus-cropper-resizer-size: 22px;\n  --plus-cropper-resizer-weight: 2px;\n  --plus-cropper-viewport-style: dashed;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-5 {\n  --plus-cropper-backdrop-color: white;\n  --plus-cropper-backdrop-opacity: 0.7;\n  --plus-cropper-resizer-color: #a93226;\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-resizer-weight: 3px;\n}\nplus-cropper.style-6 {\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper\n      class=\"style-1\"\n      indicator\n      mode=\"crop\"\n      shape=\"circle\"\n      resizer=\"main\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-2\"\n      indicator\n      mode=\"crop\"\n      resizer=\"both\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-3\"\n      guides\n      indicator\n      mode=\"crop\"\n      resizer=\"main\"\n      resizer-shape=\"circle\"\n      shape=\"circle\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-4\"\n      guides\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-5\"\n      backdrop\n      background\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/ladybug.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper class=\"style-6\" src=\"/assets/images/bear.jpg\"></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/styles",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper {\n  height: 250px;\n}\nplus-cropper.style-1 {\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\nplus-cropper.style-2 {\n  --plus-cropper-indicator-color: #e6f018;\n  --plus-cropper-indicator-size: 15px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: black;\n  --plus-cropper-resizer-offset: -27px;\n  --plus-cropper-resizer-size: 21px;\n  --plus-cropper-viewport-color: #e6f018;\n}\nplus-cropper.style-3 {\n  --plus-cropper-indicator-color: #5499c7;\n  --plus-cropper-guides-color: black;\n  --plus-cropper-resizer-color: #5499c7;\n  --plus-cropper-resizer-size: 15px;\n  --plus-cropper-viewport-color: #5499c7;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-4 {\n  --plus-cropper-guides-weight: 2px;\n  --plus-cropper-resizer-size: 22px;\n  --plus-cropper-resizer-weight: 2px;\n  --plus-cropper-viewport-style: dashed;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-5 {\n  --plus-cropper-backdrop-color: white;\n  --plus-cropper-backdrop-opacity: 0.7;\n  --plus-cropper-resizer-color: #a93226;\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-resizer-weight: 3px;\n}\nplus-cropper.style-6 {\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper\n      class=\"style-1\"\n      indicator\n      mode=\"crop\"\n      shape=\"circle\"\n      resizer=\"main\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-2\"\n      indicator\n      mode=\"crop\"\n      resizer=\"both\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-3\"\n      guides\n      indicator\n      mode=\"crop\"\n      resizer=\"main\"\n      resizer-shape=\"circle\"\n      shape=\"circle\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-4\"\n      guides\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-5\"\n      backdrop\n      background\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/ladybug.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper class=\"style-6\" src=\"/assets/images/bear.jpg\"></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/styles",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"5\">\n        <plus-cropper\n          class=\"style-1\"\n          indicator\n          mode=\"crop\"\n          shape=\"circle\"\n          resizer=\"main\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/penguin.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\">\n        <plus-cropper\n          class=\"style-2\"\n          indicator\n          mode=\"crop\"\n          resizer=\"both\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/penguin.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          class=\"style-3\"\n          guides\n          indicator\n          mode=\"crop\"\n          resizer=\"main\"\n          resizer-shape=\"circle\"\n          shape=\"circle\"\n          src=\"/assets/images/cat.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          class=\"style-4\"\n          guides\n          mode=\"crop\"\n          resizer=\"edge\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/cat.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\">\n        <plus-cropper\n          class=\"style-5\"\n          backdrop\n          background\n          mode=\"crop\"\n          resizer=\"edge\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/ladybug.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\">\n        <plus-cropper class=\"style-6\" src=\"/assets/images/bear.jpg\"></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-cropper {\n  height: 250px;\n}\nplus-cropper.style-1 {\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\nplus-cropper.style-2 {\n  --plus-cropper-indicator-color: #e6f018;\n  --plus-cropper-indicator-size: 15px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: black;\n  --plus-cropper-resizer-offset: -27px;\n  --plus-cropper-resizer-size: 21px;\n  --plus-cropper-viewport-color: #e6f018;\n}\nplus-cropper.style-3 {\n  --plus-cropper-indicator-color: #5499c7;\n  --plus-cropper-guides-color: black;\n  --plus-cropper-resizer-color: #5499c7;\n  --plus-cropper-resizer-size: 15px;\n  --plus-cropper-viewport-color: #5499c7;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-4 {\n  --plus-cropper-guides-weight: 2px;\n  --plus-cropper-resizer-size: 22px;\n  --plus-cropper-resizer-weight: 2px;\n  --plus-cropper-viewport-style: dashed;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-5 {\n  --plus-cropper-backdrop-color: white;\n  --plus-cropper-backdrop-opacity: 0.7;\n  --plus-cropper-resizer-color: #a93226;\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-resizer-weight: 3px;\n}\nplus-cropper.style-6 {\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\n"
  },
  {
    "key": "react-experimental/cropper/styles",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"5\">\n        <plus-cropper\n          className=\"style-1\"\n          indicator\n          mode=\"crop\"\n          shape=\"circle\"\n          resizer=\"main\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/penguin.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\">\n        <plus-cropper\n          className=\"style-2\"\n          indicator\n          mode=\"crop\"\n          resizer=\"both\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/penguin.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          className=\"style-3\"\n          guides\n          indicator\n          mode=\"crop\"\n          resizer=\"main\"\n          resizer-shape=\"circle\"\n          shape=\"circle\"\n          src=\"/assets/images/cat.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          className=\"style-4\"\n          guides\n          mode=\"crop\"\n          resizer=\"edge\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/cat.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\">\n        <plus-cropper\n          className=\"style-5\"\n          backdrop\n          background\n          mode=\"crop\"\n          resizer=\"edge\"\n          resizer-shape=\"line\"\n          src=\"/assets/images/ladybug.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\">\n        <plus-cropper className=\"style-6\" src=\"/assets/images/bear.jpg\"></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-cropper {\n  height: 250px;\n}\nplus-cropper.style-1 {\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\nplus-cropper.style-2 {\n  --plus-cropper-indicator-color: #e6f018;\n  --plus-cropper-indicator-size: 15px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: black;\n  --plus-cropper-resizer-offset: -27px;\n  --plus-cropper-resizer-size: 21px;\n  --plus-cropper-viewport-color: #e6f018;\n}\nplus-cropper.style-3 {\n  --plus-cropper-indicator-color: #5499c7;\n  --plus-cropper-guides-color: black;\n  --plus-cropper-resizer-color: #5499c7;\n  --plus-cropper-resizer-size: 15px;\n  --plus-cropper-viewport-color: #5499c7;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-4 {\n  --plus-cropper-guides-weight: 2px;\n  --plus-cropper-resizer-size: 22px;\n  --plus-cropper-resizer-weight: 2px;\n  --plus-cropper-viewport-style: dashed;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-5 {\n  --plus-cropper-backdrop-color: white;\n  --plus-cropper-backdrop-opacity: 0.7;\n  --plus-cropper-resizer-color: #a93226;\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-resizer-weight: 3px;\n}\nplus-cropper.style-6 {\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\n"
  },
  {
    "key": "svelte/cropper/styles",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper {\n  height: 250px;\n}\nplus-cropper.style-1 {\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\nplus-cropper.style-2 {\n  --plus-cropper-indicator-color: #e6f018;\n  --plus-cropper-indicator-size: 15px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: black;\n  --plus-cropper-resizer-offset: -27px;\n  --plus-cropper-resizer-size: 21px;\n  --plus-cropper-viewport-color: #e6f018;\n}\nplus-cropper.style-3 {\n  --plus-cropper-indicator-color: #5499c7;\n  --plus-cropper-guides-color: black;\n  --plus-cropper-resizer-color: #5499c7;\n  --plus-cropper-resizer-size: 15px;\n  --plus-cropper-viewport-color: #5499c7;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-4 {\n  --plus-cropper-guides-weight: 2px;\n  --plus-cropper-resizer-size: 22px;\n  --plus-cropper-resizer-weight: 2px;\n  --plus-cropper-viewport-style: dashed;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-5 {\n  --plus-cropper-backdrop-color: white;\n  --plus-cropper-backdrop-opacity: 0.7;\n  --plus-cropper-resizer-color: #a93226;\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-resizer-weight: 3px;\n}\nplus-cropper.style-6 {\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper\n      class=\"style-1\"\n      indicator\n      mode=\"crop\"\n      shape=\"circle\"\n      resizer=\"main\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-2\"\n      indicator\n      mode=\"crop\"\n      resizer=\"both\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-3\"\n      guides\n      indicator\n      mode=\"crop\"\n      resizer=\"main\"\n      resizer-shape=\"circle\"\n      shape=\"circle\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-4\"\n      guides\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-5\"\n      backdrop\n      background\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/ladybug.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper class=\"style-6\" src=\"/assets/images/bear.jpg\"></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/styles",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-cropper {\n  height: 250px;\n}\nplus-cropper.style-1 {\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\nplus-cropper.style-2 {\n  --plus-cropper-indicator-color: #e6f018;\n  --plus-cropper-indicator-size: 15px;\n  --plus-cropper-indicator-weight: 2px;\n  --plus-cropper-resizer-color: black;\n  --plus-cropper-resizer-offset: -27px;\n  --plus-cropper-resizer-size: 21px;\n  --plus-cropper-viewport-color: #e6f018;\n}\nplus-cropper.style-3 {\n  --plus-cropper-indicator-color: #5499c7;\n  --plus-cropper-guides-color: black;\n  --plus-cropper-resizer-color: #5499c7;\n  --plus-cropper-resizer-size: 15px;\n  --plus-cropper-viewport-color: #5499c7;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-4 {\n  --plus-cropper-guides-weight: 2px;\n  --plus-cropper-resizer-size: 22px;\n  --plus-cropper-resizer-weight: 2px;\n  --plus-cropper-viewport-style: dashed;\n  --plus-cropper-viewport-weight: 2px;\n}\nplus-cropper.style-5 {\n  --plus-cropper-backdrop-color: white;\n  --plus-cropper-backdrop-opacity: 0.7;\n  --plus-cropper-resizer-color: #a93226;\n  --plus-cropper-resizer-size: 20px;\n  --plus-cropper-resizer-weight: 3px;\n}\nplus-cropper.style-6 {\n  --plus-cropper-viewport-opacity: 0;\n  --plus-cropper-viewport-style: dashed;\n}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper\n      class=\"style-1\"\n      indicator\n      mode=\"crop\"\n      shape=\"circle\"\n      resizer=\"main\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-2\"\n      indicator\n      mode=\"crop\"\n      resizer=\"both\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/penguin.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-3\"\n      guides\n      indicator\n      mode=\"crop\"\n      resizer=\"main\"\n      resizer-shape=\"circle\"\n      shape=\"circle\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      class=\"style-4\"\n      guides\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/cat.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\">\n    <plus-cropper\n      class=\"style-5\"\n      backdrop\n      background\n      mode=\"crop\"\n      resizer=\"edge\"\n      resizer-shape=\"line\"\n      src=\"/assets/images/ladybug.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\">\n    <plus-cropper class=\"style-6\" src=\"/assets/images/bear.jpg\"></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/cropper/to-base64",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('cropper')\n  cropperRef!: ElementRef;\n  onClick() {\n    const image = new Image();\n    image.src = this.cropperRef.nativeElement.toCanvas().toDataURL();\n    const tab = open('', '_blank');\n    setTimeout(() => {\n      tab.document.write(image.outerHTML);\n    }, 250);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    #cropper\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button (click)=\"onClick()\">To Base64</button>\n</plus-center>\n"
  },
  {
    "key": "javascript/cropper/to-base64",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\n$button.addEventListener('click', () => {\n  const image = new Image();\n  image.src = $cropper.toCanvas().toDataURL();\n  const tab = open('', '_blank');\n  setTimeout(() => {\n    tab.document.write(image.outerHTML);\n  }, 250);\n});\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    id=\"$cropper\"\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button id=\"$button\">To Base64</button>\n</plus-center>\n"
  },
  {
    "key": "react/cropper/to-base64",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  const cropperRef = useRef();\n  function onClick() {\n    const image = new Image();\n    image.src = cropperRef.current.toCanvas().toDataURL();\n    const tab = open('', '_blank');\n    setTimeout(() => {\n      tab.document.write(image.outerHTML);\n    }, 250);\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          ref={cropperRef}\n        ></plus-cropper>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onClick={onClick}>To Base64</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/to-base64",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  const cropperRef = useRef();\n  function onClick() {\n    const image = new Image();\n    image.src = cropperRef.current.toCanvas().toDataURL();\n    const tab = open('', '_blank');\n    setTimeout(() => {\n      tab.document.write(image.outerHTML);\n    }, 250);\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          ref={cropperRef}\n        ></plus-cropper>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onclick={onClick}>To Base64</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/to-base64",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nlet cropperRef;\nfunction onClick() {\n  const image = new Image();\n  image.src = cropperRef.toCanvas().toDataURL();\n  const tab = open('', '_blank');\n  setTimeout(() => {\n    tab.document.write(image.outerHTML);\n  }, 250);\n}\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    bind:this={cropperRef}\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button on:click={onClick}>To Base64</button>\n</plus-center>\n"
  },
  {
    "key": "vue/cropper/to-base64",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nconst cropperRef = ref();\nfunction onClick() {\n  const image = new Image();\n  image.src = cropperRef.value.toCanvas().toDataURL();\n  const tab = open('', '_blank');\n  setTimeout(() => {\n    tab.document.write(image.outerHTML);\n  }, 250);\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-cropper\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      ref=\"cropperRef\"\n    ></plus-cropper>\n  </plus-center>\n  <br />\n  <plus-center>\n    <button @click=\"onClick\">To Base64</button>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/cropper/to-blob",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('cropper')\n  cropperRef!: ElementRef;\n  onClick() {\n    this.cropperRef.nativeElement.toCanvas().toBlob((blob) => {\n      console.log(blob);\n    });\n  }\n}\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    #cropper\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button (click)=\"onClick()\">To Blob</button>\n</plus-center>\n"
  },
  {
    "key": "javascript/cropper/to-blob",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\n$button.addEventListener('click', () => {\n  $cropper.toCanvas().toBlob((blob) => {\n    console.log(blob);\n  });\n});\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    id=\"$cropper\"\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button id=\"$button\">To Blob</button>\n</plus-center>\n"
  },
  {
    "key": "react/cropper/to-blob",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  const cropperRef = useRef();\n  function onClick() {\n    cropperRef.current.toCanvas().toBlob((blob) => {\n      console.log(blob);\n    });\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          ref={cropperRef}\n        ></plus-cropper>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onClick={onClick}>To Blob</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/to-blob",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  const cropperRef = useRef();\n  function onClick() {\n    cropperRef.current.toCanvas().toBlob((blob) => {\n      console.log(blob);\n    });\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          ref={cropperRef}\n        ></plus-cropper>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onclick={onClick}>To Blob</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/to-blob",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nlet cropperRef;\nfunction onClick() {\n  cropperRef.toCanvas().toBlob((blob) => {\n    console.log(blob);\n  });\n}\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    bind:this={cropperRef}\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button on:click={onClick}>To Blob</button>\n</plus-center>\n"
  },
  {
    "key": "vue/cropper/to-blob",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nconst cropperRef = ref();\nfunction onClick() {\n  cropperRef.value.toCanvas().toBlob((blob) => {\n    console.log(blob);\n  });\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-cropper\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      ref=\"cropperRef\"\n    ></plus-cropper>\n  </plus-center>\n  <br />\n  <plus-center>\n    <button @click=\"onClick\">To Blob</button>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/cropper/to-url",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('cropper')\n  cropperRef!: ElementRef;\n  onClick() {\n    this.cropperRef.nativeElement.toCanvas().toBlob((blob) => {\n      open(URL.createObjectURL(blob), '_blank');\n    });\n  }\n}\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    #cropper\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button (click)=\"onClick()\">To URL</button>\n</plus-center>\n"
  },
  {
    "key": "javascript/cropper/to-url",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\n$button.addEventListener('click', () => {\n  $cropper.toCanvas().toBlob((blob) => {\n    open(URL.createObjectURL(blob), '_blank');\n  });\n});\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    id=\"$cropper\"\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button id=\"$button\">To URL</button>\n</plus-center>\n"
  },
  {
    "key": "react/cropper/to-url",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  const cropperRef = useRef();\n  function onClick() {\n    cropperRef.current.toCanvas().toBlob((blob) => {\n      open(URL.createObjectURL(blob), '_blank');\n    });\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          ref={cropperRef}\n        ></plus-cropper>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onClick={onClick}>To URL</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/to-url",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nfunction App() {\n  const cropperRef = useRef();\n  function onClick() {\n    cropperRef.current.toCanvas().toBlob((blob) => {\n      open(URL.createObjectURL(blob), '_blank');\n    });\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-cropper\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n          ref={cropperRef}\n        ></plus-cropper>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onclick={onClick}>To URL</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/to-url",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nlet cropperRef;\nfunction onClick() {\n  cropperRef.toCanvas().toBlob((blob) => {\n    open(URL.createObjectURL(blob), '_blank');\n  });\n}\n",
    "template": "<plus-center>\n  <plus-cropper\n    src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    bind:this={cropperRef}\n  ></plus-cropper>\n</plus-center>\n<br />\n<plus-center>\n  <button on:click={onClick}>To URL</button>\n</plus-center>\n"
  },
  {
    "key": "vue/cropper/to-url",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/cropper.js';\n\nconst cropperRef = ref();\nfunction onClick() {\n  cropperRef.value.toCanvas().toBlob((blob) => {\n    open(URL.createObjectURL(blob), '_blank');\n  });\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-cropper\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n      ref=\"cropperRef\"\n    ></plus-cropper>\n  </plus-center>\n  <br />\n  <plus-center>\n    <button @click=\"onClick\">To URL</button>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/cropper/transparent",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      transparent\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/transparent",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      transparent\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/transparent",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          transparent\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/transparent",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          transparent\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/transparent",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper transparent src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/transparent",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      transparent\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/cropper/zoom-ratio",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      [zoom-ratio]=\"0.1\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      [zoom-ratio]=\"1.0\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/zoom-ratio",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      zoom-ratio=\"0.1\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      zoom-ratio=\"1.0\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/zoom-ratio",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable\n          zoom-ratio={0.1}\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable\n          zoom-ratio={1}\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/zoom-ratio",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable\n          zoom-ratio={0.1}\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable\n          zoom-ratio={1}\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/zoom-ratio",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      zoom-ratio={0.1}\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      zoom-ratio={1}\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/zoom-ratio",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      :zoom-ratio=\"0.1\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      :zoom-ratio=\"1.0\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/cropper/zoomable",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable=\"touch\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable=\"wheel\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/cropper/zoomable",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable=\"touch\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable=\"wheel\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/cropper/zoomable",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable=\"touch\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable=\"wheel\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/cropper/zoomable",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable=\"touch\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\">\n        <plus-cropper\n          zoomable=\"wheel\"\n          src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n        ></plus-cropper>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/cropper/zoomable",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper zoomable src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper zoomable=\"touch\" src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper zoomable=\"wheel\" src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/cropper/zoomable",
    "script": "import '@htmlplus/ui/cropper.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "template": "<plus-grid gutter=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable=\"touch\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\">\n    <plus-cropper\n      zoomable=\"wheel\"\n      src=\"https://fengyuanchen.github.io/cropperjs/images/picture.jpg\"\n    ></plus-cropper>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/dialog/animation",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-animation\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-animation\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/animation",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-animation\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-animation\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/animation",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-animation\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-animation\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/animation",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-animation\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-animation\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/animation",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-animation\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-animation\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/animation",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-animation\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-animation\">\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-default\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog connector=\"dialog-default\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-default\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog connector=\"dialog-default\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-default\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog connector=\"dialog-default\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-default\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog connector=\"dialog-default\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-default\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog connector=\"dialog-default\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-default\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog connector=\"dialog-default\">\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/full-height",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-full-height\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/full-height",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-full-height\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/full-height",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-full-height\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/full-height",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-full-height\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/full-height",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-full-height\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/full-height",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-full-height\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/full-width",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-full-width\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-full-width\" full-width>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/full-width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-full-width\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-full-width\" full-width>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/full-width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-full-width\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-full-width\" full-width>\n        <plus-dialog-content>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/full-width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-full-width\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-full-width\" full-width>\n        <plus-dialog-content>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/full-width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-full-width\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-full-width\" full-width>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/full-width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-full-width\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-full-width\" full-width>\n    <plus-dialog-content>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/fullscreen",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-fullscreen\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/fullscreen",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-fullscreen\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/fullscreen",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-fullscreen\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/fullscreen",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-fullscreen\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/fullscreen",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-fullscreen\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/fullscreen",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-fullscreen\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/nesting",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-dialog-toggler connector=\"dialog-nesting-1\"> Open Dialog 1 </plus-dialog-toggler>\n  <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n  <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n</plus-stack>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 1 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 2 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-3\" size=\"sm\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 3 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/nesting",
    "script": "import '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-dialog-toggler connector=\"dialog-nesting-1\"> Open Dialog 1 </plus-dialog-toggler>\n  <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n  <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n</plus-stack>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 1 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 2 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-3\" size=\"sm\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 3 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/nesting",
    "script": "import '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-stack gap=\"1rem\">\n        <plus-dialog-toggler connector=\"dialog-nesting-1\"> Open Dialog 1 </plus-dialog-toggler>\n        <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n        <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n      </plus-stack>\n      <plus-dialog animation=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog 1 </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n      <plus-dialog animation=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog 2 </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n      <plus-dialog animation=\"fade\" connector=\"dialog-nesting-3\" size=\"sm\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog 3 </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/nesting",
    "script": "import '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-stack gap=\"1rem\">\n        <plus-dialog-toggler connector=\"dialog-nesting-1\"> Open Dialog 1 </plus-dialog-toggler>\n        <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n        <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n      </plus-stack>\n      <plus-dialog animation=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog 1 </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n      <plus-dialog animation=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog 2 </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n      <plus-dialog animation=\"fade\" connector=\"dialog-nesting-3\" size=\"sm\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog 3 </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/nesting",
    "script": "import '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"1rem\">\n  <plus-dialog-toggler connector=\"dialog-nesting-1\"> Open Dialog 1 </plus-dialog-toggler>\n  <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n  <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n</plus-stack>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 1 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 2 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog animation=\"fade\" connector=\"dialog-nesting-3\" size=\"sm\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog 3 </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/nesting",
    "script": "import '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<div>\n  <plus-stack gap=\"1rem\">\n    <plus-dialog-toggler connector=\"dialog-nesting-1\"> Open Dialog 1 </plus-dialog-toggler>\n    <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n    <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n  </plus-stack>\n  <plus-dialog animation=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog 1 </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler connector=\"dialog-nesting-2\"> Open Dialog 2 </plus-dialog-toggler>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n  <plus-dialog animation=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog 2 </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler connector=\"dialog-nesting-3\"> Open Dialog 3 </plus-dialog-toggler>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n  <plus-dialog animation=\"fade\" connector=\"dialog-nesting-3\" size=\"sm\">\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog 3 </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/persistent",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-persistent\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-persistent\" persistent>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/persistent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-persistent\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-persistent\" persistent>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/persistent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-persistent\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-persistent\" persistent>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/persistent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-persistent\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-persistent\" persistent>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/persistent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-persistent\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-persistent\" persistent>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/persistent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-persistent\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-persistent\" persistent>\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/placement",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-placement\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/placement",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-placement\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/placement",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-placement\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/placement",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-placement\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/placement",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-placement\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/placement",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-placement\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/prevent",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusOpen(event) {\n    if (confirm('Are you sure you want to open it?')) return;\n    event.preventDefault();\n  }\n  onPlusClose(event) {\n    if (confirm('Are you sure you want to close it?')) return;\n    event.preventDefault();\n  }\n}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-prevent\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog\n  animation=\"fade\"\n  connector=\"dialog-prevent\"\n  (plus-open)=\"onPlusOpen($event)\"\n  (plus-close)=\"onPlusClose($event)\"\n>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/prevent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n$dialog.addEventListener('plus-open', (event) => {\n  if (confirm('Are you sure you want to open it?')) return;\n  event.preventDefault();\n});\n$dialog.addEventListener('plus-close', (event) => {\n  if (confirm('Are you sure you want to close it?')) return;\n  event.preventDefault();\n});\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-prevent\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog id=\"$dialog\" animation=\"fade\" connector=\"dialog-prevent\">\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/prevent",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  const dialogRef = useRef();\n  useEffect(() => {\n    if (!dialogRef.current) return;\n    function onPlusOpen(event) {\n      if (confirm('Are you sure you want to open it?')) return;\n      event.preventDefault();\n    }\n    dialogRef.current.addEventListener('plus-open', onPlusOpen);\n    return () => {\n      if (!dialogRef.current) return;\n      dialogRef.current.removeEventListener('plus-open', onPlusOpen);\n    };\n  });\n  useEffect(() => {\n    if (!dialogRef.current) return;\n    function onPlusClose(event) {\n      if (confirm('Are you sure you want to close it?')) return;\n      event.preventDefault();\n    }\n    dialogRef.current.addEventListener('plus-close', onPlusClose);\n    return () => {\n      if (!dialogRef.current) return;\n      dialogRef.current.removeEventListener('plus-close', onPlusClose);\n    };\n  });\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-prevent\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-prevent\" ref={dialogRef}>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/prevent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  function onPlusOpen(event) {\n    if (confirm('Are you sure you want to open it?')) return;\n    event.preventDefault();\n  }\n  function onPlusClose(event) {\n    if (confirm('Are you sure you want to close it?')) return;\n    event.preventDefault();\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-prevent\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog\n        animation=\"fade\"\n        connector=\"dialog-prevent\"\n        onplus-open={onPlusOpen}\n        onplus-close={onPlusClose}\n      >\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/prevent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction onPlusOpen(event) {\n  if (confirm('Are you sure you want to open it?')) return;\n  event.preventDefault();\n}\nfunction onPlusClose(event) {\n  if (confirm('Are you sure you want to close it?')) return;\n  event.preventDefault();\n}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-prevent\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog\n  animation=\"fade\"\n  connector=\"dialog-prevent\"\n  on:plus-open={onPlusOpen}\n  on:plus-close={onPlusClose}\n>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/prevent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction onPlusOpen(event) {\n  if (confirm('Are you sure you want to open it?')) return;\n  event.preventDefault();\n}\nfunction onPlusClose(event) {\n  if (confirm('Are you sure you want to close it?')) return;\n  event.preventDefault();\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-prevent\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog\n    animation=\"fade\"\n    connector=\"dialog-prevent\"\n    @plus-open=\"onPlusOpen\"\n    @plus-close=\"onPlusClose\"\n  >\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/scrollable",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-scrollable\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker api=\"lorem.paragraphs\" [arguments]='[15, \"\\n\\n\"]'></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-scrollable\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker api=\"lorem.paragraphs\" arguments='[15, \"\\n\\n\"]'></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/scrollable",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [15, '\\n\\n'];\n  }, []);\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-scrollable\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-scrollable\" scrollable>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-scrollable\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-scrollable\" scrollable>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker api=\"lorem.paragraphs\" arguments={[15, '\\n\\n']}></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-scrollable\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker api=\"lorem.paragraphs\" arguments={[15, '\\n\\n']}></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-scrollable\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-scrollable\" scrollable>\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker api=\"lorem.paragraphs\" :arguments='[15, \"\\n\\n\"]'></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/specific-scrollable",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-specific-scrollable\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body scrollable>\n      <plus-faker api=\"lorem.paragraphs\" [arguments]='[15, \"\\n\\n\"]'></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/specific-scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-specific-scrollable\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body scrollable>\n      <plus-faker api=\"lorem.paragraphs\" arguments='[15, \"\\n\\n\"]'></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/specific-scrollable",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [15, '\\n\\n'];\n  }, []);\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-specific-scrollable\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body scrollable>\n            <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/specific-scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-specific-scrollable\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body scrollable>\n            <plus-faker api=\"lorem.paragraphs\" arguments={[15, '\\n\\n']}></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/specific-scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-specific-scrollable\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body scrollable>\n      <plus-faker api=\"lorem.paragraphs\" arguments={[15, '\\n\\n']}></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/specific-scrollable",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-specific-scrollable\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body scrollable>\n        <plus-faker api=\"lorem.paragraphs\" :arguments='[15, \"\\n\\n\"]'></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/sticky",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-sticky\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/sticky",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-sticky\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/sticky",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-sticky\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n        <plus-dialog-content>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/sticky",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-sticky\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n        <plus-dialog-content>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/sticky",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-sticky\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/sticky",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-sticky\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n    <plus-dialog-content>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/dialog/transparent",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-backdrop\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-backdrop\" transparent>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "javascript/dialog/transparent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-backdrop\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-backdrop\" transparent>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "react/dialog/transparent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-backdrop\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-backdrop\" transparent>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/dialog/transparent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-center>\n        <plus-dialog-toggler connector=\"dialog-backdrop\"> Open </plus-dialog-toggler>\n      </plus-center>\n      <plus-dialog animation=\"fade\" connector=\"dialog-backdrop\" transparent>\n        <plus-dialog-content>\n          <plus-dialog-header> Dialog Title </plus-dialog-header>\n          <plus-dialog-body>\n            <plus-faker></plus-faker>\n          </plus-dialog-body>\n          <plus-dialog-footer>\n            <plus-dialog-toggler> Close </plus-dialog-toggler>\n          </plus-dialog-footer>\n        </plus-dialog-content>\n      </plus-dialog>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/dialog/transparent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<plus-center>\n  <plus-dialog-toggler connector=\"dialog-backdrop\"> Open </plus-dialog-toggler>\n</plus-center>\n<plus-dialog animation=\"fade\" connector=\"dialog-backdrop\" transparent>\n  <plus-dialog-content>\n    <plus-dialog-header> Dialog Title </plus-dialog-header>\n    <plus-dialog-body>\n      <plus-faker></plus-faker>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler> Close </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n"
  },
  {
    "key": "vue/dialog/transparent",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/dialog-body.js';\nimport '@htmlplus/ui/dialog-content.js';\nimport '@htmlplus/ui/dialog-footer.js';\nimport '@htmlplus/ui/dialog-header.js';\nimport '@htmlplus/ui/dialog-toggler.js';\nimport '@htmlplus/ui/dialog.js';\nimport '@htmlplus/ui/faker.js';\n",
    "template": "<div>\n  <plus-center>\n    <plus-dialog-toggler connector=\"dialog-backdrop\"> Open </plus-dialog-toggler>\n  </plus-center>\n  <plus-dialog animation=\"fade\" connector=\"dialog-backdrop\" transparent>\n    <plus-dialog-content>\n      <plus-dialog-header> Dialog Title </plus-dialog-header>\n      <plus-dialog-body>\n        <plus-faker></plus-faker>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler> Close </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>\n"
  },
  {
    "key": "angular/divider/customized",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-divider {\n  gap: 1rem;\n  color: rgb(238, 110, 115);\n  margin-bottom: 1rem;\n}\nplus-divider::part(line) {\n  border-color: rgba(238, 110, 115, 0.25);\n}\n",
    "template": "<plus-divider>\n  <span>\n    <plus-icon name=\"tag\"></plus-icon>\n    &nbsp; Description\n  </span>\n</plus-divider>\n<plus-faker></plus-faker>\n"
  },
  {
    "key": "javascript/divider/customized",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  gap: 1rem;\n  color: rgb(238, 110, 115);\n  margin-bottom: 1rem;\n}\nplus-divider::part(line) {\n  border-color: rgba(238, 110, 115, 0.25);\n}\n",
    "template": "<plus-divider>\n  <span>\n    <plus-icon name=\"tag\"></plus-icon>\n    &nbsp; Description\n  </span>\n</plus-divider>\n<plus-faker></plus-faker>\n"
  },
  {
    "key": "react/divider/customized",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider>\n        <span>\n          <plus-icon name=\"tag\"></plus-icon>\n          &nbsp; Description\n        </span>\n      </plus-divider>\n      <plus-faker></plus-faker>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-divider {\n  gap: 1rem;\n  color: rgb(238, 110, 115);\n  margin-bottom: 1rem;\n}\nplus-divider::part(line) {\n  border-color: rgba(238, 110, 115, 0.25);\n}\n"
  },
  {
    "key": "react-experimental/divider/customized",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider>\n        <span>\n          <plus-icon name=\"tag\"></plus-icon>\n          &nbsp; Description\n        </span>\n      </plus-divider>\n      <plus-faker></plus-faker>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-divider {\n  gap: 1rem;\n  color: rgb(238, 110, 115);\n  margin-bottom: 1rem;\n}\nplus-divider::part(line) {\n  border-color: rgba(238, 110, 115, 0.25);\n}\n"
  },
  {
    "key": "svelte/divider/customized",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  gap: 1rem;\n  color: rgb(238, 110, 115);\n  margin-bottom: 1rem;\n}\nplus-divider::part(line) {\n  border-color: rgba(238, 110, 115, 0.25);\n}\n",
    "template": "<plus-divider>\n  <span>\n    <plus-icon name=\"tag\"></plus-icon>\n    &nbsp; Description\n  </span>\n</plus-divider>\n<plus-faker></plus-faker>\n"
  },
  {
    "key": "vue/divider/customized",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  gap: 1rem;\n  color: rgb(238, 110, 115);\n  margin-bottom: 1rem;\n}\nplus-divider::part(line) {\n  border-color: rgba(238, 110, 115, 0.25);\n}\n",
    "template": "<div>\n  <plus-divider>\n    <span>\n      <plus-icon name=\"tag\"></plus-icon>\n      &nbsp; Description\n    </span>\n  </plus-divider>\n  <plus-faker></plus-faker>\n</div>\n"
  },
  {
    "key": "angular/divider/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-divider></plus-divider>\n"
  },
  {
    "key": "javascript/divider/default",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider></plus-divider>\n"
  },
  {
    "key": "react/divider/default",
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return <plus-divider></plus-divider>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/divider/default",
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return <plus-divider></plus-divider>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/divider/default",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider></plus-divider>\n"
  },
  {
    "key": "vue/divider/default",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider></plus-divider>\n"
  },
  {
    "key": "angular/divider/horizontal",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-divider {\n  margin: 1rem 0;\n}\n",
    "template": "<plus-faker></plus-faker>\n<plus-divider>OR</plus-divider>\n<plus-faker></plus-faker>\n"
  },
  {
    "key": "javascript/divider/horizontal",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  margin: 1rem 0;\n}\n",
    "template": "<plus-faker></plus-faker>\n<plus-divider>OR</plus-divider>\n<plus-faker></plus-faker>\n"
  },
  {
    "key": "react/divider/horizontal",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-faker></plus-faker>\n      <plus-divider>OR</plus-divider>\n      <plus-faker></plus-faker>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-divider {\n  margin: 1rem 0;\n}\n"
  },
  {
    "key": "react-experimental/divider/horizontal",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-faker></plus-faker>\n      <plus-divider>OR</plus-divider>\n      <plus-faker></plus-faker>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-divider {\n  margin: 1rem 0;\n}\n"
  },
  {
    "key": "svelte/divider/horizontal",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  margin: 1rem 0;\n}\n",
    "template": "<plus-faker></plus-faker>\n<plus-divider>OR</plus-divider>\n<plus-faker></plus-faker>\n"
  },
  {
    "key": "vue/divider/horizontal",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  margin: 1rem 0;\n}\n",
    "template": "<div>\n  <plus-faker></plus-faker>\n  <plus-divider>OR</plus-divider>\n  <plus-faker></plus-faker>\n</div>\n"
  },
  {
    "key": "angular/divider/placement",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-divider placement=\"center\">Center</plus-divider>\n<br />\n<plus-divider placement=\"start\">Start</plus-divider>\n<br />\n<plus-divider placement=\"end\">End</plus-divider>\n"
  },
  {
    "key": "javascript/divider/placement",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider placement=\"center\">Center</plus-divider>\n<br />\n<plus-divider placement=\"start\">Start</plus-divider>\n<br />\n<plus-divider placement=\"end\">End</plus-divider>\n"
  },
  {
    "key": "react/divider/placement",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider placement=\"center\">Center</plus-divider>\n      <br />\n      <plus-divider placement=\"start\">Start</plus-divider>\n      <br />\n      <plus-divider placement=\"end\">End</plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/divider/placement",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider placement=\"center\">Center</plus-divider>\n      <br />\n      <plus-divider placement=\"start\">Start</plus-divider>\n      <br />\n      <plus-divider placement=\"end\">End</plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/divider/placement",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider placement=\"center\">Center</plus-divider>\n<br />\n<plus-divider placement=\"start\">Start</plus-divider>\n<br />\n<plus-divider placement=\"end\">End</plus-divider>\n"
  },
  {
    "key": "vue/divider/placement",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<div>\n  <plus-divider placement=\"center\">Center</plus-divider>\n  <br />\n  <plus-divider placement=\"start\">Start</plus-divider>\n  <br />\n  <plus-divider placement=\"end\">End</plus-divider>\n</div>\n"
  },
  {
    "key": "angular/divider/sticky",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nspan {\n  background-color: white;\n  padding: 0 0.5rem;\n}\nplus-divider {\n  gap: 0;\n}\nplus-sticky {\n  margin-bottom: 20rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>\n    <plus-divider>\n      <span>Today</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>Yesterday</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>5 Days Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>2 Weeks Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>1 Month Ago</span>\n    </plus-divider>\n  </plus-sticky>\n</div>\n"
  },
  {
    "key": "javascript/divider/sticky",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nspan {\n  background-color: white;\n  padding: 0 0.5rem;\n}\nplus-divider {\n  gap: 0;\n}\nplus-sticky {\n  margin-bottom: 20rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>\n    <plus-divider>\n      <span>Today</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>Yesterday</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>5 Days Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>2 Weeks Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>1 Month Ago</span>\n    </plus-divider>\n  </plus-sticky>\n</div>\n"
  },
  {
    "key": "react/divider/sticky",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-sticky>\n        <plus-divider>\n          <span>Today</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>Yesterday</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>5 Days Ago</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>2 Weeks Ago</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>1 Month Ago</span>\n        </plus-divider>\n      </plus-sticky>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nspan {\n  background-color: white;\n  padding: 0 0.5rem;\n}\nplus-divider {\n  gap: 0;\n}\nplus-sticky {\n  margin-bottom: 20rem;\n}\n"
  },
  {
    "key": "react-experimental/divider/sticky",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-sticky>\n        <plus-divider>\n          <span>Today</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>Yesterday</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>5 Days Ago</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>2 Weeks Ago</span>\n        </plus-divider>\n      </plus-sticky>\n      <plus-sticky>\n        <plus-divider>\n          <span>1 Month Ago</span>\n        </plus-divider>\n      </plus-sticky>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nspan {\n  background-color: white;\n  padding: 0 0.5rem;\n}\nplus-divider {\n  gap: 0;\n}\nplus-sticky {\n  margin-bottom: 20rem;\n}\n"
  },
  {
    "key": "svelte/divider/sticky",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nspan {\n  background-color: white;\n  padding: 0 0.5rem;\n}\nplus-divider {\n  gap: 0;\n}\nplus-sticky {\n  margin-bottom: 20rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>\n    <plus-divider>\n      <span>Today</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>Yesterday</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>5 Days Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>2 Weeks Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>1 Month Ago</span>\n    </plus-divider>\n  </plus-sticky>\n</div>\n"
  },
  {
    "key": "vue/divider/sticky",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nspan {\n  background-color: white;\n  padding: 0 0.5rem;\n}\nplus-divider {\n  gap: 0;\n}\nplus-sticky {\n  margin-bottom: 20rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>\n    <plus-divider>\n      <span>Today</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>Yesterday</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>5 Days Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>2 Weeks Ago</span>\n    </plus-divider>\n  </plus-sticky>\n  <plus-sticky>\n    <plus-divider>\n      <span>1 Month Ago</span>\n    </plus-divider>\n  </plus-sticky>\n</div>\n"
  },
  {
    "key": "angular/divider/type",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-divider type=\"dashed\"></plus-divider>\n<br />\n<plus-divider type=\"dotted\"></plus-divider>\n<br />\n<plus-divider type=\"double\"></plus-divider>\n<br />\n<plus-divider type=\"groove\"></plus-divider>\n<br />\n<plus-divider type=\"inset\"></plus-divider>\n<br />\n<plus-divider type=\"outset\"></plus-divider>\n<br />\n<plus-divider type=\"ridge\"></plus-divider>\n<br />\n<plus-divider type=\"solid\"></plus-divider>\n"
  },
  {
    "key": "javascript/divider/type",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider type=\"dashed\"></plus-divider>\n<br />\n<plus-divider type=\"dotted\"></plus-divider>\n<br />\n<plus-divider type=\"double\"></plus-divider>\n<br />\n<plus-divider type=\"groove\"></plus-divider>\n<br />\n<plus-divider type=\"inset\"></plus-divider>\n<br />\n<plus-divider type=\"outset\"></plus-divider>\n<br />\n<plus-divider type=\"ridge\"></plus-divider>\n<br />\n<plus-divider type=\"solid\"></plus-divider>\n"
  },
  {
    "key": "react/divider/type",
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider type=\"dashed\"></plus-divider>\n      <br />\n      <plus-divider type=\"dotted\"></plus-divider>\n      <br />\n      <plus-divider type=\"double\"></plus-divider>\n      <br />\n      <plus-divider type=\"groove\"></plus-divider>\n      <br />\n      <plus-divider type=\"inset\"></plus-divider>\n      <br />\n      <plus-divider type=\"outset\"></plus-divider>\n      <br />\n      <plus-divider type=\"ridge\"></plus-divider>\n      <br />\n      <plus-divider type=\"solid\"></plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/divider/type",
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider type=\"dashed\"></plus-divider>\n      <br />\n      <plus-divider type=\"dotted\"></plus-divider>\n      <br />\n      <plus-divider type=\"double\"></plus-divider>\n      <br />\n      <plus-divider type=\"groove\"></plus-divider>\n      <br />\n      <plus-divider type=\"inset\"></plus-divider>\n      <br />\n      <plus-divider type=\"outset\"></plus-divider>\n      <br />\n      <plus-divider type=\"ridge\"></plus-divider>\n      <br />\n      <plus-divider type=\"solid\"></plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/divider/type",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider type=\"dashed\"></plus-divider>\n<br />\n<plus-divider type=\"dotted\"></plus-divider>\n<br />\n<plus-divider type=\"double\"></plus-divider>\n<br />\n<plus-divider type=\"groove\"></plus-divider>\n<br />\n<plus-divider type=\"inset\"></plus-divider>\n<br />\n<plus-divider type=\"outset\"></plus-divider>\n<br />\n<plus-divider type=\"ridge\"></plus-divider>\n<br />\n<plus-divider type=\"solid\"></plus-divider>\n"
  },
  {
    "key": "vue/divider/type",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<div>\n  <plus-divider type=\"dashed\"></plus-divider>\n  <br />\n  <plus-divider type=\"dotted\"></plus-divider>\n  <br />\n  <plus-divider type=\"double\"></plus-divider>\n  <br />\n  <plus-divider type=\"groove\"></plus-divider>\n  <br />\n  <plus-divider type=\"inset\"></plus-divider>\n  <br />\n  <plus-divider type=\"outset\"></plus-divider>\n  <br />\n  <plus-divider type=\"ridge\"></plus-divider>\n  <br />\n  <plus-divider type=\"solid\"></plus-divider>\n</div>\n"
  },
  {
    "key": "angular/divider/variant",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-divider variant=\"middle\"></plus-divider>\n<br />\n<plus-divider variant=\"inset\"></plus-divider>\n<br />\n<plus-divider variant=\"full\"></plus-divider>\n"
  },
  {
    "key": "javascript/divider/variant",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider variant=\"middle\"></plus-divider>\n<br />\n<plus-divider variant=\"inset\"></plus-divider>\n<br />\n<plus-divider variant=\"full\"></plus-divider>\n"
  },
  {
    "key": "react/divider/variant",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider variant=\"middle\"></plus-divider>\n      <br />\n      <plus-divider variant=\"inset\"></plus-divider>\n      <br />\n      <plus-divider variant=\"full\"></plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/divider/variant",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider variant=\"middle\"></plus-divider>\n      <br />\n      <plus-divider variant=\"inset\"></plus-divider>\n      <br />\n      <plus-divider variant=\"full\"></plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/divider/variant",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider variant=\"middle\"></plus-divider>\n<br />\n<plus-divider variant=\"inset\"></plus-divider>\n<br />\n<plus-divider variant=\"full\"></plus-divider>\n"
  },
  {
    "key": "vue/divider/variant",
    "settings": {
      "dock": false,
      "isolate": false,
      "rtl": true
    },
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<div>\n  <plus-divider variant=\"middle\"></plus-divider>\n  <br />\n  <plus-divider variant=\"inset\"></plus-divider>\n  <br />\n  <plus-divider variant=\"full\"></plus-divider>\n</div>\n"
  },
  {
    "key": "angular/divider/vertical",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-divider {\n  margin: 0 1rem;\n}\n",
    "template": "<plus-stack>\n  <plus-faker></plus-faker>\n  <plus-divider vertical>OR</plus-divider>\n  <plus-faker></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "javascript/divider/vertical",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  margin: 0 1rem;\n}\n",
    "template": "<plus-stack>\n  <plus-faker></plus-faker>\n  <plus-divider vertical>OR</plus-divider>\n  <plus-faker></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "react/divider/vertical",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-stack>\n      <plus-faker></plus-faker>\n      <plus-divider vertical>OR</plus-divider>\n      <plus-faker></plus-faker>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-divider {\n  margin: 0 1rem;\n}\n"
  },
  {
    "key": "react-experimental/divider/vertical",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return (\n    <plus-stack>\n      <plus-faker></plus-faker>\n      <plus-divider vertical>OR</plus-divider>\n      <plus-faker></plus-faker>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-divider {\n  margin: 0 1rem;\n}\n"
  },
  {
    "key": "svelte/divider/vertical",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  margin: 0 1rem;\n}\n",
    "template": "<plus-stack>\n  <plus-faker></plus-faker>\n  <plus-divider vertical>OR</plus-divider>\n  <plus-faker></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "vue/divider/vertical",
    "script": "import '@htmlplus/ui/divider.js';\nimport '@htmlplus/ui/faker.js';\n",
    "style": "plus-divider {\n  margin: 0 1rem;\n}\n",
    "template": "<plus-stack>\n  <plus-faker></plus-faker>\n  <plus-divider vertical>OR</plus-divider>\n  <plus-faker></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "angular/divider/width",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/divider.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-divider width=\"xs\"></plus-divider>\n<br />\n<plus-divider width=\"sm\"></plus-divider>\n<br />\n<plus-divider width=\"md\"></plus-divider>\n<br />\n<plus-divider width=\"lg\"></plus-divider>\n<br />\n<plus-divider width=\"xl\"></plus-divider>\n"
  },
  {
    "key": "javascript/divider/width",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider width=\"xs\"></plus-divider>\n<br />\n<plus-divider width=\"sm\"></plus-divider>\n<br />\n<plus-divider width=\"md\"></plus-divider>\n<br />\n<plus-divider width=\"lg\"></plus-divider>\n<br />\n<plus-divider width=\"xl\"></plus-divider>\n"
  },
  {
    "key": "react/divider/width",
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider width=\"xs\"></plus-divider>\n      <br />\n      <plus-divider width=\"sm\"></plus-divider>\n      <br />\n      <plus-divider width=\"md\"></plus-divider>\n      <br />\n      <plus-divider width=\"lg\"></plus-divider>\n      <br />\n      <plus-divider width=\"xl\"></plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/divider/width",
    "script": "import '@htmlplus/ui/divider.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-divider width=\"xs\"></plus-divider>\n      <br />\n      <plus-divider width=\"sm\"></plus-divider>\n      <br />\n      <plus-divider width=\"md\"></plus-divider>\n      <br />\n      <plus-divider width=\"lg\"></plus-divider>\n      <br />\n      <plus-divider width=\"xl\"></plus-divider>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/divider/width",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<plus-divider width=\"xs\"></plus-divider>\n<br />\n<plus-divider width=\"sm\"></plus-divider>\n<br />\n<plus-divider width=\"md\"></plus-divider>\n<br />\n<plus-divider width=\"lg\"></plus-divider>\n<br />\n<plus-divider width=\"xl\"></plus-divider>\n"
  },
  {
    "key": "vue/divider/width",
    "script": "import '@htmlplus/ui/divider.js';\n",
    "template": "<div>\n  <plus-divider width=\"xs\"></plus-divider>\n  <br />\n  <plus-divider width=\"sm\"></plus-divider>\n  <br />\n  <plus-divider width=\"md\"></plus-divider>\n  <br />\n  <plus-divider width=\"lg\"></plus-divider>\n  <br />\n  <plus-divider width=\"xl\"></plus-divider>\n</div>\n"
  },
  {
    "key": "angular/drawer/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/drawer-toggler.js';\nimport '@htmlplus/ui/drawer.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n  padding: 10rem 0;\n  text-align: center;\n}\nplus-drawer plus-card {\n  --plus-card-background-color: lightblue;\n  margin-right: 0.5rem;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"auto\">\n    <plus-drawer animation=\"fade\" size=\"200px\" connector=\"drawer-default\">\n      <plus-card> Drawer Content </plus-card>\n    </plus-drawer>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <plus-card>\n      <plus-drawer-toggler connector=\"drawer-default\"> Toggle </plus-drawer-toggler>\n    </plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/drawer/default",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/drawer-toggler.js';\nimport '@htmlplus/ui/drawer.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n  padding: 10rem 0;\n  text-align: center;\n}\nplus-drawer plus-card {\n  --plus-card-background-color: lightblue;\n  margin-right: 0.5rem;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"auto\">\n    <plus-drawer animation=\"fade\" size=\"200px\" connector=\"drawer-default\">\n      <plus-card> Drawer Content </plus-card>\n    </plus-drawer>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <plus-card>\n      <plus-drawer-toggler connector=\"drawer-default\"> Toggle </plus-drawer-toggler>\n    </plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/drawer/default",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/drawer-toggler.js';\nimport '@htmlplus/ui/drawer.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"auto\">\n        <plus-drawer animation=\"fade\" size=\"200px\" connector=\"drawer-default\">\n          <plus-card> Drawer Content </plus-card>\n        </plus-drawer>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <plus-card>\n          <plus-drawer-toggler connector=\"drawer-default\"> Toggle </plus-drawer-toggler>\n        </plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n  padding: 10rem 0;\n  text-align: center;\n}\nplus-drawer plus-card {\n  --plus-card-background-color: lightblue;\n  margin-right: 0.5rem;\n}\n"
  },
  {
    "key": "react-experimental/drawer/default",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/drawer-toggler.js';\nimport '@htmlplus/ui/drawer.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"auto\">\n        <plus-drawer animation=\"fade\" size=\"200px\" connector=\"drawer-default\">\n          <plus-card> Drawer Content </plus-card>\n        </plus-drawer>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <plus-card>\n          <plus-drawer-toggler connector=\"drawer-default\"> Toggle </plus-drawer-toggler>\n        </plus-card>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n  padding: 10rem 0;\n  text-align: center;\n}\nplus-drawer plus-card {\n  --plus-card-background-color: lightblue;\n  margin-right: 0.5rem;\n}\n"
  },
  {
    "key": "svelte/drawer/default",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/drawer-toggler.js';\nimport '@htmlplus/ui/drawer.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n  padding: 10rem 0;\n  text-align: center;\n}\nplus-drawer plus-card {\n  --plus-card-background-color: lightblue;\n  margin-right: 0.5rem;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"auto\">\n    <plus-drawer animation=\"fade\" size=\"200px\" connector=\"drawer-default\">\n      <plus-card> Drawer Content </plus-card>\n    </plus-drawer>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <plus-card>\n      <plus-drawer-toggler connector=\"drawer-default\"> Toggle </plus-drawer-toggler>\n    </plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/drawer/default",
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/drawer-toggler.js';\nimport '@htmlplus/ui/drawer.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-card {\n  --plus-card-background-color: lightgray;\n  padding: 10rem 0;\n  text-align: center;\n}\nplus-drawer plus-card {\n  --plus-card-background-color: lightblue;\n  margin-right: 0.5rem;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"auto\">\n    <plus-drawer animation=\"fade\" size=\"200px\" connector=\"drawer-default\">\n      <plus-card> Drawer Content </plus-card>\n    </plus-drawer>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <plus-card>\n      <plus-drawer-toggler connector=\"drawer-default\"> Toggle </plus-drawer-toggler>\n    </plus-card>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/faker/api",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-faker api=\"lorem.paragraphs\"></plus-faker>\n"
  },
  {
    "key": "javascript/faker/api",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker api=\"lorem.paragraphs\"></plus-faker>\n"
  },
  {
    "key": "react/faker/api",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker api=\"lorem.paragraphs\"></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/faker/api",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker api=\"lorem.paragraphs\"></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/faker/api",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker api=\"lorem.paragraphs\"></plus-faker>\n"
  },
  {
    "key": "vue/faker/api",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker api=\"lorem.paragraphs\"></plus-faker>\n"
  },
  {
    "key": "angular/faker/arguments",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-faker api=\"lorem.paragraphs\" [arguments]='[5, \"\\n\\n\"]'></plus-faker>\n"
  },
  {
    "key": "javascript/faker/arguments",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker api=\"lorem.paragraphs\" arguments='[5, \"\\n\\n\"]'></plus-faker>\n"
  },
  {
    "key": "react/faker/arguments",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [5, '\\n\\n'];\n  }, []);\n  return <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/faker/arguments",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker api=\"lorem.paragraphs\" arguments={[5, '\\n\\n']}></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/faker/arguments",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker api=\"lorem.paragraphs\" arguments={[5, '\\n\\n']}></plus-faker>\n"
  },
  {
    "key": "vue/faker/arguments",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker api=\"lorem.paragraphs\" :arguments='[5, \"\\n\\n\"]'></plus-faker>\n"
  },
  {
    "key": "angular/faker/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "javascript/faker/default",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "react/faker/default",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/faker/default",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/faker/default",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "vue/faker/default",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "angular/faker/localization",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { faker } from '@faker-js/faker/locale/ja';\n\nimport { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-faker': {\n      property: {\n        instance: faker\n      }\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "javascript/faker/localization",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { faker } from '@faker-js/faker/locale/ja';\n\nimport { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-faker': {\n      property: {\n        instance: faker\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "react/faker/localization",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { faker } from '@faker-js/faker/locale/ja';\n\nimport { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-faker': {\n      property: {\n        instance: faker\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/faker/localization",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { faker } from '@faker-js/faker/locale/ja';\n\nimport { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-faker': {\n      property: {\n        instance: faker\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/faker/localization",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { faker } from '@faker-js/faker/locale/ja';\n\nimport { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-faker': {\n      property: {\n        instance: faker\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "vue/faker/localization",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { faker } from '@faker-js/faker/locale/ja';\n\nimport { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-faker': {\n      property: {\n        instance: faker\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker></plus-faker>\n"
  },
  {
    "key": "angular/faker/more",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-faker api=\"person.fullName\"></plus-faker>\n  <plus-faker api=\"location.county\"></plus-faker>\n  <plus-faker api=\"date.weekday\"></plus-faker>\n  <plus-faker api=\"animal.dog\"></plus-faker>\n  <plus-faker api=\"internet.email\"></plus-faker>\n  <plus-faker api=\"phone.number\"></plus-faker>\n  <plus-faker api=\"color.human\"></plus-faker>\n  <plus-faker api=\"string.uuid\"></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "javascript/faker/more",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-faker api=\"person.fullName\"></plus-faker>\n  <plus-faker api=\"location.county\"></plus-faker>\n  <plus-faker api=\"date.weekday\"></plus-faker>\n  <plus-faker api=\"animal.dog\"></plus-faker>\n  <plus-faker api=\"internet.email\"></plus-faker>\n  <plus-faker api=\"phone.number\"></plus-faker>\n  <plus-faker api=\"color.human\"></plus-faker>\n  <plus-faker api=\"string.uuid\"></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "react/faker/more",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-faker api=\"person.fullName\"></plus-faker>\n      <plus-faker api=\"location.county\"></plus-faker>\n      <plus-faker api=\"date.weekday\"></plus-faker>\n      <plus-faker api=\"animal.dog\"></plus-faker>\n      <plus-faker api=\"internet.email\"></plus-faker>\n      <plus-faker api=\"phone.number\"></plus-faker>\n      <plus-faker api=\"color.human\"></plus-faker>\n      <plus-faker api=\"string.uuid\"></plus-faker>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/faker/more",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-faker api=\"person.fullName\"></plus-faker>\n      <plus-faker api=\"location.county\"></plus-faker>\n      <plus-faker api=\"date.weekday\"></plus-faker>\n      <plus-faker api=\"animal.dog\"></plus-faker>\n      <plus-faker api=\"internet.email\"></plus-faker>\n      <plus-faker api=\"phone.number\"></plus-faker>\n      <plus-faker api=\"color.human\"></plus-faker>\n      <plus-faker api=\"string.uuid\"></plus-faker>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/faker/more",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-faker api=\"person.fullName\"></plus-faker>\n  <plus-faker api=\"location.county\"></plus-faker>\n  <plus-faker api=\"date.weekday\"></plus-faker>\n  <plus-faker api=\"animal.dog\"></plus-faker>\n  <plus-faker api=\"internet.email\"></plus-faker>\n  <plus-faker api=\"phone.number\"></plus-faker>\n  <plus-faker api=\"color.human\"></plus-faker>\n  <plus-faker api=\"string.uuid\"></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "vue/faker/more",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-faker api=\"person.fullName\"></plus-faker>\n  <plus-faker api=\"location.county\"></plus-faker>\n  <plus-faker api=\"date.weekday\"></plus-faker>\n  <plus-faker api=\"animal.dog\"></plus-faker>\n  <plus-faker api=\"internet.email\"></plus-faker>\n  <plus-faker api=\"phone.number\"></plus-faker>\n  <plus-faker api=\"color.human\"></plus-faker>\n  <plus-faker api=\"string.uuid\"></plus-faker>\n</plus-stack>\n"
  },
  {
    "key": "angular/faker/seed",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-faker [seed]=\"12345\"></plus-faker>\n"
  },
  {
    "key": "javascript/faker/seed",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker seed=\"12345\"></plus-faker>\n"
  },
  {
    "key": "react/faker/seed",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker seed={12345}></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/faker/seed",
    "script": "import '@htmlplus/ui/faker.js';\n\nfunction App() {\n  return <plus-faker seed={12345}></plus-faker>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/faker/seed",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker seed={12345}></plus-faker>\n"
  },
  {
    "key": "vue/faker/seed",
    "script": "import '@htmlplus/ui/faker.js';\n",
    "template": "<plus-faker :seed=\"12345\"></plus-faker>\n"
  },
  {
    "key": "angular/format-bytes/decimals",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"1200\" [decimals]=\"0\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1200\" [decimals]=\"3\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1200\" [decimals]=\"[3, 3]\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1000\" [decimals]=\"[0, 3]\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1000\" [decimals]=\"[1, 3]\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1001\" [decimals]=\"[0, 3]\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/decimals",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"1200\" decimals=\"0\"></plus-format-bytes>\n  <plus-format-bytes value=\"1200\" decimals=\"3\"></plus-format-bytes>\n  <plus-format-bytes value=\"1200\" decimals=\"[3, 3]\"></plus-format-bytes>\n  <plus-format-bytes value=\"1000\" decimals=\"[0, 3]\"></plus-format-bytes>\n  <plus-format-bytes value=\"1000\" decimals=\"[1, 3]\"></plus-format-bytes>\n  <plus-format-bytes value=\"1001\" decimals=\"[0, 3]\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/decimals",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  const plusFormatBytesRef = useRef();\n  useEffect(() => {\n    plusFormatBytesRef.current.decimals = [3, 3];\n  }, []);\n  useEffect(() => {\n    plusFormatBytesRef.current.decimals = [0, 3];\n  }, []);\n  useEffect(() => {\n    plusFormatBytesRef.current.decimals = [1, 3];\n  }, []);\n  useEffect(() => {\n    plusFormatBytesRef.current.decimals = [0, 3];\n  }, []);\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1200} decimals={0}></plus-format-bytes>\n      <plus-format-bytes value={1200} decimals={3}></plus-format-bytes>\n      <plus-format-bytes value={1200} ref={plusFormatBytesRef}></plus-format-bytes>\n      <plus-format-bytes value={1000}></plus-format-bytes>\n      <plus-format-bytes value={1000}></plus-format-bytes>\n      <plus-format-bytes value={1001}></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/decimals",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1200} decimals={0}></plus-format-bytes>\n      <plus-format-bytes value={1200} decimals={3}></plus-format-bytes>\n      <plus-format-bytes value={1200} decimals={[3, 3]}></plus-format-bytes>\n      <plus-format-bytes value={1000} decimals={[0, 3]}></plus-format-bytes>\n      <plus-format-bytes value={1000} decimals={[1, 3]}></plus-format-bytes>\n      <plus-format-bytes value={1001} decimals={[0, 3]}></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/decimals",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={1200} decimals={0}></plus-format-bytes>\n  <plus-format-bytes value={1200} decimals={3}></plus-format-bytes>\n  <plus-format-bytes value={1200} decimals={[3, 3]}></plus-format-bytes>\n  <plus-format-bytes value={1000} decimals={[0, 3]}></plus-format-bytes>\n  <plus-format-bytes value={1000} decimals={[1, 3]}></plus-format-bytes>\n  <plus-format-bytes value={1001} decimals={[0, 3]}></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/decimals",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"1200\" :decimals=\"0\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1200\" :decimals=\"3\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1200\" :decimals=\"[3, 3]\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1000\" :decimals=\"[0, 3]\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1000\" :decimals=\"[1, 3]\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1001\" :decimals=\"[0, 3]\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/format-bytes.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-format-bytes [value]=\"1000\"></plus-format-bytes>\n</plus-center>\n"
  },
  {
    "key": "javascript/format-bytes/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/format-bytes.js';\n",
    "template": "<plus-center>\n  <plus-format-bytes value=\"1000\"></plus-format-bytes>\n</plus-center>\n"
  },
  {
    "key": "react/format-bytes/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/format-bytes.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-format-bytes value={1000}></plus-format-bytes>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/format-bytes.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-format-bytes value={1000}></plus-format-bytes>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/format-bytes.js';\n",
    "template": "<plus-center>\n  <plus-format-bytes value={1000}></plus-format-bytes>\n</plus-center>\n"
  },
  {
    "key": "vue/format-bytes/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/format-bytes.js';\n",
    "template": "<plus-center>\n  <plus-format-bytes :value=\"1000\"></plus-format-bytes>\n</plus-center>\n"
  },
  {
    "key": "angular/format-bytes/display",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"1000\" display=\"short\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1000\" display=\"long\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/display",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"1000\" display=\"short\"></plus-format-bytes>\n  <plus-format-bytes value=\"1000\" display=\"long\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/display",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1000} display=\"short\"></plus-format-bytes>\n      <plus-format-bytes value={1000} display=\"long\"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/display",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1000} display=\"short\"></plus-format-bytes>\n      <plus-format-bytes value={1000} display=\"long\"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/display",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={1000} display=\"short\"></plus-format-bytes>\n  <plus-format-bytes value={1000} display=\"long\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/display",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"1000\" display=\"short\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1000\" display=\"long\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/formatting",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"1500\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"800000000\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"6900000000\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"222000000000000\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/formatting",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"1500\"></plus-format-bytes>\n  <plus-format-bytes value=\"800000000\"></plus-format-bytes>\n  <plus-format-bytes value=\"6900000000\"></plus-format-bytes>\n  <plus-format-bytes value=\"222000000000000\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/formatting",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1500}></plus-format-bytes>\n      <plus-format-bytes value={800000000}></plus-format-bytes>\n      <plus-format-bytes value={6900000000}></plus-format-bytes>\n      <plus-format-bytes value={222000000000000}></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/formatting",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1500}></plus-format-bytes>\n      <plus-format-bytes value={800000000}></plus-format-bytes>\n      <plus-format-bytes value={6900000000}></plus-format-bytes>\n      <plus-format-bytes value={222000000000000}></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/formatting",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={1500}></plus-format-bytes>\n  <plus-format-bytes value={800000000}></plus-format-bytes>\n  <plus-format-bytes value={6900000000}></plus-format-bytes>\n  <plus-format-bytes value={222000000000000}></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/formatting",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"1500\"></plus-format-bytes>\n  <plus-format-bytes :value=\"800000000\"></plus-format-bytes>\n  <plus-format-bytes :value=\"6900000000\"></plus-format-bytes>\n  <plus-format-bytes :value=\"222000000000000\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/locale",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"10000100\" locale=\"en\" unit=\"kilo\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"10000100\" locale=\"de\" unit=\"kilo\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/locale",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"10000100\" locale=\"en\" unit=\"kilo\"></plus-format-bytes>\n  <plus-format-bytes value=\"10000100\" locale=\"de\" unit=\"kilo\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/locale",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={10000100} locale=\"en\" unit=\"kilo\"></plus-format-bytes>\n      <plus-format-bytes value={10000100} locale=\"de\" unit=\"kilo\"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/locale",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={10000100} locale=\"en\" unit=\"kilo\"></plus-format-bytes>\n      <plus-format-bytes value={10000100} locale=\"de\" unit=\"kilo\"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/locale",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={10000100} locale=\"en\" unit=\"kilo\"></plus-format-bytes>\n  <plus-format-bytes value={10000100} locale=\"de\" unit=\"kilo\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/locale",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"10000100\" locale=\"en\" unit=\"kilo\"></plus-format-bytes>\n  <plus-format-bytes :value=\"10000100\" locale=\"de\" unit=\"kilo\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/separator",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"1000\" separator=\"\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1000\" separator=\" \"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/separator",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"1000\" separator=\"\"></plus-format-bytes>\n  <plus-format-bytes value=\"1000\" separator=\" \"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/separator",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1000} separator=\"\"></plus-format-bytes>\n      <plus-format-bytes value={1000} separator=\" \"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/separator",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1000} separator=\"\"></plus-format-bytes>\n      <plus-format-bytes value={1000} separator=\" \"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/separator",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={1000} separator=\"\"></plus-format-bytes>\n  <plus-format-bytes value={1000} separator=\" \"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/separator",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"1000\" separator=\"\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1000\" separator=\" \"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/signed",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"-1000\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"-1000\" signed></plus-format-bytes>\n  <plus-format-bytes [value]=\"0\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"0\" signed></plus-format-bytes>\n  <plus-format-bytes [value]=\"1000\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1000\" signed></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/signed",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"-1000\"></plus-format-bytes>\n  <plus-format-bytes value=\"-1000\" signed></plus-format-bytes>\n  <plus-format-bytes value=\"0\"></plus-format-bytes>\n  <plus-format-bytes value=\"0\" signed></plus-format-bytes>\n  <plus-format-bytes value=\"1000\"></plus-format-bytes>\n  <plus-format-bytes value=\"1000\" signed></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/signed",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={-1000}></plus-format-bytes>\n      <plus-format-bytes value={-1000} signed></plus-format-bytes>\n      <plus-format-bytes value={0}></plus-format-bytes>\n      <plus-format-bytes value={0} signed></plus-format-bytes>\n      <plus-format-bytes value={1000}></plus-format-bytes>\n      <plus-format-bytes value={1000} signed></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/signed",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={-1000}></plus-format-bytes>\n      <plus-format-bytes value={-1000} signed></plus-format-bytes>\n      <plus-format-bytes value={0}></plus-format-bytes>\n      <plus-format-bytes value={0} signed></plus-format-bytes>\n      <plus-format-bytes value={1000}></plus-format-bytes>\n      <plus-format-bytes value={1000} signed></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/signed",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={-1000}></plus-format-bytes>\n  <plus-format-bytes value={-1000} signed></plus-format-bytes>\n  <plus-format-bytes value={0}></plus-format-bytes>\n  <plus-format-bytes value={0} signed></plus-format-bytes>\n  <plus-format-bytes value={1000}></plus-format-bytes>\n  <plus-format-bytes value={1000} signed></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/signed",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"-1000\"></plus-format-bytes>\n  <plus-format-bytes :value=\"-1000\" signed></plus-format-bytes>\n  <plus-format-bytes :value=\"0\"></plus-format-bytes>\n  <plus-format-bytes :value=\"0\" signed></plus-format-bytes>\n  <plus-format-bytes :value=\"1000\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1000\" signed></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/standard",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes [value]=\"1000\" standard=\"METRIC\"></plus-format-bytes>\n  <plus-format-bytes [value]=\"1024\" standard=\"IEC\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/standard",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value=\"1000\" standard=\"METRIC\"></plus-format-bytes>\n  <plus-format-bytes value=\"1024\" standard=\"IEC\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/standard",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1000} standard=\"METRIC\"></plus-format-bytes>\n      <plus-format-bytes value={1024} standard=\"IEC\"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/standard",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes value={1000} standard=\"METRIC\"></plus-format-bytes>\n      <plus-format-bytes value={1024} standard=\"IEC\"></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/standard",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes value={1000} standard=\"METRIC\"></plus-format-bytes>\n  <plus-format-bytes value={1024} standard=\"IEC\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/standard",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes :value=\"1000\" standard=\"METRIC\"></plus-format-bytes>\n  <plus-format-bytes :value=\"1024\" standard=\"IEC\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/format-bytes/unit",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes unit=\"auto\" [value]=\"1000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"base\" [value]=\"10000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" [value]=\"100000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" [value]=\"1000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" [value]=\"10000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" [value]=\"100000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" [value]=\"1000000000\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "javascript/format-bytes/unit",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes unit=\"auto\" value=\"1000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"base\" value=\"10000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value=\"100000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value=\"1000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value=\"10000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value=\"100000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value=\"1000000000\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "react/format-bytes/unit",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes unit=\"auto\" value={1000}></plus-format-bytes>\n      <plus-format-bytes unit=\"base\" value={10000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={100000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={1000000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={10000000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={100000000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={1000000000}></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/format-bytes/unit",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack vertical>\n      <plus-format-bytes unit=\"auto\" value={1000}></plus-format-bytes>\n      <plus-format-bytes unit=\"base\" value={10000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={100000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={1000000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={10000000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={100000000}></plus-format-bytes>\n      <plus-format-bytes unit=\"kilo\" value={1000000000}></plus-format-bytes>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/format-bytes/unit",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes unit=\"auto\" value={1000}></plus-format-bytes>\n  <plus-format-bytes unit=\"base\" value={10000}></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value={100000}></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value={1000000}></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value={10000000}></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value={100000000}></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" value={1000000000}></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "vue/format-bytes/unit",
    "script": "import '@htmlplus/ui/format-bytes.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack vertical>\n  <plus-format-bytes unit=\"auto\" :value=\"1000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"base\" :value=\"10000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" :value=\"100000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" :value=\"1000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" :value=\"10000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" :value=\"100000000\"></plus-format-bytes>\n  <plus-format-bytes unit=\"kilo\" :value=\"1000000000\"></plus-format-bytes>\n</plus-stack>\n"
  },
  {
    "key": "angular/grid/align-content",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-content=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/align-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-content=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/align-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-content=\"center\">\n      <plus-grid-item xs=\"6\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/align-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-content=\"center\">\n      <plus-grid-item xs=\"6\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/align-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-content=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/align-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-content=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/align-items",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/align-items",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/align-items",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-items=\"center\">\n      <plus-grid-item xs=\"6\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/align-items",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-items=\"center\">\n      <plus-grid-item xs=\"6\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/align-items",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/align-items",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/align-self",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"grow\" align-self=\"start\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\" align-self=\"end\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/align-self",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"grow\" align-self=\"start\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\" align-self=\"end\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/align-self",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-items=\"center\">\n      <plus-grid-item xs=\"grow\" align-self=\"start\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\" align-self=\"end\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/align-self",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-items=\"center\">\n      <plus-grid-item xs=\"grow\" align-self=\"start\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\" align-self=\"end\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/align-self",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"grow\" align-self=\"start\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\" align-self=\"end\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/align-self",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  background-color: whitesmoke;\n  height: 8rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"grow\" align-self=\"start\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\" align-self=\"end\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/auto-sizing",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n</plus-grid>\n<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div>xs=12, md=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div>xs=12, md=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/auto-sizing",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n</plus-grid>\n<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div>xs=12, md=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div>xs=12, md=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/auto-sizing",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-grid>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n      </plus-grid>\n      <plus-grid>\n        <plus-grid-item xs=\"12\" md=\"2\">\n          <div>xs=12, md=2</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" md=\"2\">\n          <div>xs=12, md=2</div>\n        </plus-grid-item>\n      </plus-grid>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/auto-sizing",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-grid>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n      </plus-grid>\n      <plus-grid>\n        <plus-grid-item xs=\"12\" md=\"2\">\n          <div>xs=12, md=2</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"grow\">\n          <div>xs=grow</div>\n        </plus-grid-item>\n        <plus-grid-item xs=\"12\" md=\"2\">\n          <div>xs=12, md=2</div>\n        </plus-grid-item>\n      </plus-grid>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/auto-sizing",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n</plus-grid>\n<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div>xs=12, md=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>xs=grow</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div>xs=12, md=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/auto-sizing",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<div>\n  <plus-grid>\n    <plus-grid-item xs=\"grow\">\n      <div>xs=grow</div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"grow\">\n      <div>xs=grow</div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"grow\">\n      <div>xs=grow</div>\n    </plus-grid-item>\n  </plus-grid>\n  <plus-grid>\n    <plus-grid-item xs=\"12\" md=\"2\">\n      <div>xs=12, md=2</div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"grow\">\n      <div>xs=grow</div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" md=\"2\">\n      <div>xs=12, md=2</div>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "angular/grid/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/default",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/default",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"12\" md=\"4\">\n        <div>xs=12, md=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" md=\"4\">\n        <div>xs=12, md=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" md=\"4\">\n        <div>xs=12, md=4</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/default",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"12\" md=\"4\">\n        <div>xs=12, md=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" md=\"4\">\n        <div>xs=12, md=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" md=\"4\">\n        <div>xs=12, md=4</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/default",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/default",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div>xs=12, md=4</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/gutter-x",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-x=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/gutter-x",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-x=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/gutter-x",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter-x=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n        <div>xs=12, sm=6, lg=5</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n        <div>xs=12, sm=6, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n        <div>xs=12, sm=7, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n        <div>xs=12, sm=5, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n        <div>xs=12, sm=5, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n        <div>xs=12, sm=7, lg=5</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/gutter-x",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter-x=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n        <div>xs=12, sm=6, lg=5</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n        <div>xs=12, sm=6, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n        <div>xs=12, sm=7, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n        <div>xs=12, sm=5, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n        <div>xs=12, sm=5, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n        <div>xs=12, sm=7, lg=5</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/gutter-x",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-x=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/gutter-x",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-x=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/gutter-y",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-y=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/gutter-y",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-y=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/gutter-y",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter-y=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n        <div>xs=12, sm=6, lg=5</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n        <div>xs=12, sm=6, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n        <div>xs=12, sm=7, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n        <div>xs=12, sm=5, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n        <div>xs=12, sm=5, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n        <div>xs=12, sm=7, lg=5</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/gutter-y",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter-y=\"md\">\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n        <div>xs=12, sm=6, lg=5</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n        <div>xs=12, sm=6, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n        <div>xs=12, sm=7, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n        <div>xs=12, sm=5, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n        <div>xs=12, sm=5, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n        <div>xs=12, sm=7, lg=5</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/gutter-y",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-y=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/gutter-y",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter-y=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/gutter",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter=\"lg\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/gutter",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter=\"lg\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/gutter",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"lg\">\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n        <div>xs=12, sm=6, lg=5</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n        <div>xs=12, sm=6, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n        <div>xs=12, sm=7, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n        <div>xs=12, sm=5, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n        <div>xs=12, sm=5, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n        <div>xs=12, sm=7, lg=5</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/gutter",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid gutter=\"lg\">\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n        <div>xs=12, sm=6, lg=5</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n        <div>xs=12, sm=6, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n        <div>xs=12, sm=7, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n        <div>xs=12, sm=5, lg=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n        <div>xs=12, sm=5, lg=4</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n        <div>xs=12, sm=7, lg=5</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/gutter",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter=\"lg\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/gutter",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid gutter=\"lg\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div>xs=12, sm=6, lg=5</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div>xs=12, sm=6, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div>xs=12, sm=7, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div>xs=12, sm=5, lg=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div>xs=12, sm=5, lg=4</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div>xs=12, sm=7, lg=5</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/hide",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item hide-sm xs=\"3\">\n    <div>xs=3, hide-sm</div>\n  </plus-grid-item>\n  <plus-grid-item hide-md xs=\"4\">\n    <div>xs=4, hide-md</div>\n  </plus-grid-item>\n  <plus-grid-item hide-lg xs=\"5\">\n    <div>xs=5, hide-lg</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/hide",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item hide-sm xs=\"3\">\n    <div>xs=3, hide-sm</div>\n  </plus-grid-item>\n  <plus-grid-item hide-md xs=\"4\">\n    <div>xs=4, hide-md</div>\n  </plus-grid-item>\n  <plus-grid-item hide-lg xs=\"5\">\n    <div>xs=5, hide-lg</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/hide",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item hide-sm xs=\"3\">\n        <div>xs=3, hide-sm</div>\n      </plus-grid-item>\n      <plus-grid-item hide-md xs=\"4\">\n        <div>xs=4, hide-md</div>\n      </plus-grid-item>\n      <plus-grid-item hide-lg xs=\"5\">\n        <div>xs=5, hide-lg</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/hide",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item hide-sm xs=\"3\">\n        <div>xs=3, hide-sm</div>\n      </plus-grid-item>\n      <plus-grid-item hide-md xs=\"4\">\n        <div>xs=4, hide-md</div>\n      </plus-grid-item>\n      <plus-grid-item hide-lg xs=\"5\">\n        <div>xs=5, hide-lg</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/hide",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item hide-sm xs=\"3\">\n    <div>xs=3, hide-sm</div>\n  </plus-grid-item>\n  <plus-grid-item hide-md xs=\"4\">\n    <div>xs=4, hide-md</div>\n  </plus-grid-item>\n  <plus-grid-item hide-lg xs=\"5\">\n    <div>xs=5, hide-lg</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/hide",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item hide-sm xs=\"3\">\n    <div>xs=3, hide-sm</div>\n  </plus-grid-item>\n  <plus-grid-item hide-md xs=\"4\">\n    <div>xs=4, hide-md</div>\n  </plus-grid-item>\n  <plus-grid-item hide-lg xs=\"5\">\n    <div>xs=5, hide-lg</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/justify-content",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid justify-content=\"center\">\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/justify-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid justify-content=\"center\">\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/justify-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"center\">\n      <plus-grid-item xs=\"2\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/justify-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid justify-content=\"center\">\n      <plus-grid-item xs=\"2\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/justify-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid justify-content=\"center\">\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/justify-content",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid justify-content=\"center\">\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/offset",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item offset-xs=\"3\" xs=\"3\">\n    <div>offset-xs=\"3\", xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/offset",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item offset-xs=\"3\" xs=\"3\">\n    <div>offset-xs=\"3\", xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/offset",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"3\">\n        <div>xs=3</div>\n      </plus-grid-item>\n      <plus-grid-item offset-xs=\"3\" xs=\"3\">\n        <div>offset-xs=\"3\", xs=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>xs=3</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/offset",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item xs=\"3\">\n        <div>xs=3</div>\n      </plus-grid-item>\n      <plus-grid-item offset-xs=\"3\" xs=\"3\">\n        <div>offset-xs=\"3\", xs=3</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>xs=3</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/offset",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item offset-xs=\"3\" xs=\"3\">\n    <div>offset-xs=\"3\", xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/offset",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item offset-xs=\"3\" xs=\"3\">\n    <div>offset-xs=\"3\", xs=3</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>xs=3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/order",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item order-xs=\"3\" xs=\"grow\">\n    <div>order=3</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"2\" xs=\"grow\">\n    <div>order=2</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"1\" xs=\"grow\">\n    <div>order=1</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/order",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item order-xs=\"3\" xs=\"grow\">\n    <div>order=3</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"2\" xs=\"grow\">\n    <div>order=2</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"1\" xs=\"grow\">\n    <div>order=1</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/order",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item order-xs=\"3\" xs=\"grow\">\n        <div>order=3</div>\n      </plus-grid-item>\n      <plus-grid-item order-xs=\"2\" xs=\"grow\">\n        <div>order=2</div>\n      </plus-grid-item>\n      <plus-grid-item order-xs=\"1\" xs=\"grow\">\n        <div>order=1</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/order",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid>\n      <plus-grid-item order-xs=\"3\" xs=\"grow\">\n        <div>order=3</div>\n      </plus-grid-item>\n      <plus-grid-item order-xs=\"2\" xs=\"grow\">\n        <div>order=2</div>\n      </plus-grid-item>\n      <plus-grid-item order-xs=\"1\" xs=\"grow\">\n        <div>order=1</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/order",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item order-xs=\"3\" xs=\"grow\">\n    <div>order=3</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"2\" xs=\"grow\">\n    <div>order=2</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"1\" xs=\"grow\">\n    <div>order=1</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/order",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid>\n  <plus-grid-item order-xs=\"3\" xs=\"grow\">\n    <div>order=3</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"2\" xs=\"grow\">\n    <div>order=2</div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"1\" xs=\"grow\">\n    <div>order=1</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/reverse",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid reverse>\n  <plus-grid-item xs=\"2\">\n    <div>Item 1</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/reverse",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid reverse>\n  <plus-grid-item xs=\"2\">\n    <div>Item 1</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/reverse",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid reverse>\n      <plus-grid-item xs=\"2\">\n        <div>Item 1</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item 2</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item 3</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/reverse",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid reverse>\n      <plus-grid-item xs=\"2\">\n        <div>Item 1</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item 2</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>Item 3</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/reverse",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid reverse>\n  <plus-grid-item xs=\"2\">\n    <div>Item 1</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/reverse",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid reverse>\n  <plus-grid-item xs=\"2\">\n    <div>Item 1</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>Item 3</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/vertical",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid {\n  height: 12rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  height: 100%;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\" vertical>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/vertical",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  height: 12rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  height: 100%;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\" vertical>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/vertical",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-items=\"center\" vertical>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  height: 12rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  height: 100%;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/vertical",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid align-items=\"center\" vertical>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"grow\">\n        <div>Item</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"3\">\n        <div>Item</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid {\n  height: 12rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  height: 100%;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/vertical",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  height: 12rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  height: 100%;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\" vertical>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/vertical",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid {\n  height: 12rem;\n}\nplus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  height: 100%;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid align-items=\"center\" vertical>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div>Item</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div>Item</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/grid/wrap",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid wrap=\"off\">\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "javascript/grid/wrap",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid wrap=\"off\">\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "react/grid/wrap",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid wrap=\"off\">\n      <plus-grid-item xs=\"6\">\n        <div>xs=6</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>xs=2</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\">\n        <div>xs=6</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>xs=2</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "react-experimental/grid/wrap",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n\nfunction App() {\n  return (\n    <plus-grid wrap=\"off\">\n      <plus-grid-item xs=\"6\">\n        <div>xs=6</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>xs=2</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\">\n        <div>xs=6</div>\n      </plus-grid-item>\n      <plus-grid-item xs=\"2\">\n        <div>xs=2</div>\n      </plus-grid-item>\n    </plus-grid>\n  );\n}\nexport default App;\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n"
  },
  {
    "key": "svelte/grid/wrap",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid wrap=\"off\">\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "vue/grid/wrap",
    "script": "import '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\n",
    "style": "plus-grid div {\n  color: #00bcd4;\n  border: 1px solid #ffffff;\n  background-color: #e0f7fa;\n  padding: 0.5em;\n  text-align: center;\n}\n",
    "template": "<plus-grid wrap=\"off\">\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <div>xs=6</div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div>xs=2</div>\n  </plus-grid-item>\n</plus-grid>\n"
  },
  {
    "key": "angular/icon/animation",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/pulse.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/swing.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-animation [duration]=\"1000\" [iterations]=\"Infinity\" name=\"pulse\" run>\n    <plus-icon name=\"heart\"></plus-icon>\n  </plus-animation>\n  <plus-animation [duration]=\"1000\" [iterations]=\"Infinity\" name=\"swing\" run>\n    <plus-icon name=\"telephone\"></plus-icon>\n  </plus-animation>\n  <plus-animation [duration]=\"2000\" [iterations]=\"Infinity\" name=\"tada\" run>\n    <plus-icon name=\"bell\"></plus-icon>\n  </plus-animation>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/animation",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/pulse.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/swing.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-animation duration=\"1000\" iterations=\"Infinity\" name=\"pulse\" run>\n    <plus-icon name=\"heart\"></plus-icon>\n  </plus-animation>\n  <plus-animation duration=\"1000\" iterations=\"Infinity\" name=\"swing\" run>\n    <plus-icon name=\"telephone\"></plus-icon>\n  </plus-animation>\n  <plus-animation duration=\"2000\" iterations=\"Infinity\" name=\"tada\" run>\n    <plus-icon name=\"bell\"></plus-icon>\n  </plus-animation>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/animation",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/pulse.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/swing.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-animation duration={1000} iterations={Infinity} name=\"pulse\" run>\n        <plus-icon name=\"heart\"></plus-icon>\n      </plus-animation>\n      <plus-animation duration={1000} iterations={Infinity} name=\"swing\" run>\n        <plus-icon name=\"telephone\"></plus-icon>\n      </plus-animation>\n      <plus-animation duration={2000} iterations={Infinity} name=\"tada\" run>\n        <plus-icon name=\"bell\"></plus-icon>\n      </plus-animation>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/animation",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/pulse.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/swing.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-animation duration={1000} iterations={Infinity} name=\"pulse\" run>\n        <plus-icon name=\"heart\"></plus-icon>\n      </plus-animation>\n      <plus-animation duration={1000} iterations={Infinity} name=\"swing\" run>\n        <plus-icon name=\"telephone\"></plus-icon>\n      </plus-animation>\n      <plus-animation duration={2000} iterations={Infinity} name=\"tada\" run>\n        <plus-icon name=\"bell\"></plus-icon>\n      </plus-animation>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/animation",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/pulse.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/swing.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-animation duration={1000} iterations={Infinity} name=\"pulse\" run>\n    <plus-icon name=\"heart\"></plus-icon>\n  </plus-animation>\n  <plus-animation duration={1000} iterations={Infinity} name=\"swing\" run>\n    <plus-icon name=\"telephone\"></plus-icon>\n  </plus-animation>\n  <plus-animation duration={2000} iterations={Infinity} name=\"tada\" run>\n    <plus-icon name=\"bell\"></plus-icon>\n  </plus-animation>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/animation",
    "script": "import '@htmlplus/ui/animation.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/pulse.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/swing.js';\nimport '@htmlplus/ui/animation/names/attention-seekers/tada.js';\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-animation :duration=\"1000\" :iterations=\"Infinity\" name=\"pulse\" run>\n    <plus-icon name=\"heart\"></plus-icon>\n  </plus-animation>\n  <plus-animation :duration=\"1000\" :iterations=\"Infinity\" name=\"swing\" run>\n    <plus-icon name=\"telephone\"></plus-icon>\n  </plus-animation>\n  <plus-animation :duration=\"2000\" :iterations=\"Infinity\" name=\"tada\" run>\n    <plus-icon name=\"bell\"></plus-icon>\n  </plus-animation>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"#08DFC8\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FF5449\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#5F9EE9\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FFC903\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#9073C1\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"#08DFC8\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FF5449\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#5F9EE9\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FFC903\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#9073C1\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" color=\"#08DFC8\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#FF5449\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#5F9EE9\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#FFC903\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#9073C1\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" color=\"#08DFC8\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#FF5449\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#5F9EE9\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#FFC903\"></plus-icon>\n      <plus-icon name=\"house\" color=\"#9073C1\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"#08DFC8\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FF5449\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#5F9EE9\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FFC903\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#9073C1\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"#08DFC8\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FF5449\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#5F9EE9\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#FFC903\"></plus-icon>\n  <plus-icon name=\"house\" color=\"#9073C1\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/custom-color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-icon[color='primary'] {\n  color: #ff5449;\n}\nplus-icon[color='secondary'] {\n  color: #08dfc8;\n}\nplus-icon[color='tertiary'] {\n  color: #5f9ee9;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"primary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"secondary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"tertiary\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/custom-color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-icon[color='primary'] {\n  color: #ff5449;\n}\nplus-icon[color='secondary'] {\n  color: #08dfc8;\n}\nplus-icon[color='tertiary'] {\n  color: #5f9ee9;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"primary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"secondary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"tertiary\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/custom-color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" color=\"primary\"></plus-icon>\n      <plus-icon name=\"house\" color=\"secondary\"></plus-icon>\n      <plus-icon name=\"house\" color=\"tertiary\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-icon[color='primary'] {\n  color: #ff5449;\n}\nplus-icon[color='secondary'] {\n  color: #08dfc8;\n}\nplus-icon[color='tertiary'] {\n  color: #5f9ee9;\n}\n"
  },
  {
    "key": "react-experimental/icon/custom-color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" color=\"primary\"></plus-icon>\n      <plus-icon name=\"house\" color=\"secondary\"></plus-icon>\n      <plus-icon name=\"house\" color=\"tertiary\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-icon[color='primary'] {\n  color: #ff5449;\n}\nplus-icon[color='secondary'] {\n  color: #08dfc8;\n}\nplus-icon[color='tertiary'] {\n  color: #5f9ee9;\n}\n"
  },
  {
    "key": "svelte/icon/custom-color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-icon[color='primary'] {\n  color: #ff5449;\n}\nplus-icon[color='secondary'] {\n  color: #08dfc8;\n}\nplus-icon[color='tertiary'] {\n  color: #5f9ee9;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"primary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"secondary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"tertiary\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/custom-color",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-icon[color='primary'] {\n  color: #ff5449;\n}\nplus-icon[color='secondary'] {\n  color: #08dfc8;\n}\nplus-icon[color='tertiary'] {\n  color: #5f9ee9;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" color=\"primary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"secondary\"></plus-icon>\n  <plus-icon name=\"house\" color=\"tertiary\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-icon></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "javascript/icon/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "react/icon/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "vue/icon/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "angular/icon/flip",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"horizontal\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"vertical\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"both\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/flip",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"horizontal\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"vertical\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"both\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/flip",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\"></plus-icon>\n      <plus-icon name=\"house\" flip=\"horizontal\"></plus-icon>\n      <plus-icon name=\"house\" flip=\"vertical\"></plus-icon>\n      <plus-icon name=\"house\" flip=\"both\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/flip",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\"></plus-icon>\n      <plus-icon name=\"house\" flip=\"horizontal\"></plus-icon>\n      <plus-icon name=\"house\" flip=\"vertical\"></plus-icon>\n      <plus-icon name=\"house\" flip=\"both\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/flip",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"horizontal\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"vertical\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"both\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/flip",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"horizontal\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"vertical\"></plus-icon>\n  <plus-icon name=\"house\" flip=\"both\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/font-awesome",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          let category = 'regular';\n          if (name.startsWith('fas-')) category = 'solid';\n          if (name.startsWith('fab-')) category = 'brands';\n          name = name.replace(/^fa[rbs]-/, '');\n          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"far-user\"></plus-icon>\n  <plus-icon name=\"fas-user\"></plus-icon>\n  <plus-icon name=\"fab-apple\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/font-awesome",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          let category = 'regular';\n          if (name.startsWith('fas-')) category = 'solid';\n          if (name.startsWith('fab-')) category = 'brands';\n          name = name.replace(/^fa[rbs]-/, '');\n          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"far-user\"></plus-icon>\n  <plus-icon name=\"fas-user\"></plus-icon>\n  <plus-icon name=\"fab-apple\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/font-awesome",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          let category = 'regular';\n          if (name.startsWith('fas-')) category = 'solid';\n          if (name.startsWith('fab-')) category = 'brands';\n          name = name.replace(/^fa[rbs]-/, '');\n          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"far-user\"></plus-icon>\n      <plus-icon name=\"fas-user\"></plus-icon>\n      <plus-icon name=\"fab-apple\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/font-awesome",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          let category = 'regular';\n          if (name.startsWith('fas-')) category = 'solid';\n          if (name.startsWith('fab-')) category = 'brands';\n          name = name.replace(/^fa[rbs]-/, '');\n          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"far-user\"></plus-icon>\n      <plus-icon name=\"fas-user\"></plus-icon>\n      <plus-icon name=\"fab-apple\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/font-awesome",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          let category = 'regular';\n          if (name.startsWith('fas-')) category = 'solid';\n          if (name.startsWith('fab-')) category = 'brands';\n          name = name.replace(/^fa[rbs]-/, '');\n          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"far-user\"></plus-icon>\n  <plus-icon name=\"fas-user\"></plus-icon>\n  <plus-icon name=\"fab-apple\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/font-awesome",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          let category = 'regular';\n          if (name.startsWith('fas-')) category = 'solid';\n          if (name.startsWith('fab-')) category = 'brands';\n          name = name.replace(/^fa[rbs]-/, '');\n          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"far-user\"></plus-icon>\n  <plus-icon name=\"fas-user\"></plus-icon>\n  <plus-icon name=\"fab-apple\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/label",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\" label=\"Go to home\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "javascript/icon/label",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\" label=\"Go to home\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "react/icon/label",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"house\" label=\"Go to home\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/label",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"house\" label=\"Go to home\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/label",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\" label=\"Go to home\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "vue/icon/label",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\" label=\"Go to home\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "angular/icon/material",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name, parser) => {\n          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);\n          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"home_outline\"></plus-icon>\n  <plus-icon name=\"home_round\"></plus-icon>\n  <plus-icon name=\"home_sharp\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/material",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name, parser) => {\n          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);\n          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"home_outline\"></plus-icon>\n  <plus-icon name=\"home_round\"></plus-icon>\n  <plus-icon name=\"home_sharp\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/material",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name, parser) => {\n          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);\n          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"home_outline\"></plus-icon>\n      <plus-icon name=\"home_round\"></plus-icon>\n      <plus-icon name=\"home_sharp\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/material",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name, parser) => {\n          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);\n          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"home_outline\"></plus-icon>\n      <plus-icon name=\"home_round\"></plus-icon>\n      <plus-icon name=\"home_sharp\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/material",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name, parser) => {\n          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);\n          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"home_outline\"></plus-icon>\n  <plus-icon name=\"home_round\"></plus-icon>\n  <plus-icon name=\"home_sharp\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/material",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name, parser) => {\n          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);\n          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;\n          return fetch(url)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"home_outline\"></plus-icon>\n  <plus-icon name=\"home_round\"></plus-icon>\n  <plus-icon name=\"home_sharp\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/multiple-library",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name) => {\n          const [library, icon] = name.split('/');\n          const references = {\n            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,\n            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,\n            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`\n          };\n          const url = references[library];\n          return fetch(url).then((response) => response.text());\n        }\n      }\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"carbon/user\"></plus-icon>\n  <plus-icon name=\"lucide/user\"></plus-icon>\n  <plus-icon name=\"tabler/user\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/multiple-library",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name) => {\n          const [library, icon] = name.split('/');\n          const references = {\n            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,\n            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,\n            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`\n          };\n          const url = references[library];\n          return fetch(url).then((response) => response.text());\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"carbon/user\"></plus-icon>\n  <plus-icon name=\"lucide/user\"></plus-icon>\n  <plus-icon name=\"tabler/user\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/multiple-library",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name) => {\n          const [library, icon] = name.split('/');\n          const references = {\n            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,\n            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,\n            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`\n          };\n          const url = references[library];\n          return fetch(url).then((response) => response.text());\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"carbon/user\"></plus-icon>\n      <plus-icon name=\"lucide/user\"></plus-icon>\n      <plus-icon name=\"tabler/user\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/multiple-library",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name) => {\n          const [library, icon] = name.split('/');\n          const references = {\n            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,\n            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,\n            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`\n          };\n          const url = references[library];\n          return fetch(url).then((response) => response.text());\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"carbon/user\"></plus-icon>\n      <plus-icon name=\"lucide/user\"></plus-icon>\n      <plus-icon name=\"tabler/user\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/multiple-library",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name) => {\n          const [library, icon] = name.split('/');\n          const references = {\n            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,\n            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,\n            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`\n          };\n          const url = references[library];\n          return fetch(url).then((response) => response.text());\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"carbon/user\"></plus-icon>\n  <plus-icon name=\"lucide/user\"></plus-icon>\n  <plus-icon name=\"tabler/user\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/multiple-library",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: (name) => {\n          const [library, icon] = name.split('/');\n          const references = {\n            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,\n            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,\n            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`\n          };\n          const url = references[library];\n          return fetch(url).then((response) => response.text());\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"carbon/user\"></plus-icon>\n  <plus-icon name=\"lucide/user\"></plus-icon>\n  <plus-icon name=\"tabler/user\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/name",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "javascript/icon/name",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "react/icon/name",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"house\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/name",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"house\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/name",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "vue/icon/name",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"house\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "angular/icon/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    icon: {\n      'custom-logo': `\n              <svg viewBox=\"0 0 1000 1000\">\n                <path d=\"M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z\" />\n              </svg>\n            `\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-icon name=\"custom-logo\" size=\"5x\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "javascript/icon/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    icon: {\n      'custom-logo': `\n              <svg viewBox=\"0 0 1000 1000\">\n                <path d=\"M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z\" />\n              </svg>\n            `\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"custom-logo\" size=\"5x\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "react/icon/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    icon: {\n      'custom-logo': `\n              <svg viewBox=\"0 0 1000 1000\">\n                <path d=\"M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z\" />\n              </svg>\n            `\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"custom-logo\" size=\"5x\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    icon: {\n      'custom-logo': `\n              <svg viewBox=\"0 0 1000 1000\">\n                <path d=\"M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z\" />\n              </svg>\n            `\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"custom-logo\" size=\"5x\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    icon: {\n      'custom-logo': `\n              <svg viewBox=\"0 0 1000 1000\">\n                <path d=\"M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z\" />\n              </svg>\n            `\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"custom-logo\" size=\"5x\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "vue/icon/register-a-custom-name",
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  asset: {\n    icon: {\n      'custom-logo': `\n              <svg viewBox=\"0 0 1000 1000\">\n                <path d=\"M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z\" />\n              </svg>\n            `\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"custom-logo\" size=\"5x\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "angular/icon/resolver",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-icon name=\"heart\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "javascript/icon/resolver",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"heart\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "react/icon/resolver",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"heart\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/resolver",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-icon name=\"heart\"></plus-icon>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/resolver",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"heart\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "vue/icon/resolver",
    "settings": {
      "dock": false,
      "isolate": true,
      "rtl": false
    },
    "config": "import { setConfig } from '@htmlplus/ui/config.js';\n\nsetConfig({\n  element: {\n    'plus-icon': {\n      property: {\n        resolver: async (name, parser) => {\n          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)\n            .then((response) => response.text())\n            .then((raw) => parser(raw))\n            .then((svg) => {\n              svg.setAttribute('fill', 'currentColor');\n              return svg;\n            });\n        }\n      }\n    }\n  }\n});\n",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/icon.js';\n",
    "template": "<plus-center>\n  <plus-icon name=\"heart\"></plus-icon>\n</plus-center>\n"
  },
  {
    "key": "angular/icon/rotate",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" [rotate]=\"0\"></plus-icon>\n  <plus-icon name=\"house\" [rotate]=\"90\"></plus-icon>\n  <plus-icon name=\"house\" [rotate]=\"180\"></plus-icon>\n  <plus-icon name=\"house\" [rotate]=\"270\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/rotate",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" rotate=\"0\"></plus-icon>\n  <plus-icon name=\"house\" rotate=\"90\"></plus-icon>\n  <plus-icon name=\"house\" rotate=\"180\"></plus-icon>\n  <plus-icon name=\"house\" rotate=\"270\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/rotate",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" rotate={0}></plus-icon>\n      <plus-icon name=\"house\" rotate={90}></plus-icon>\n      <plus-icon name=\"house\" rotate={180}></plus-icon>\n      <plus-icon name=\"house\" rotate={270}></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/rotate",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" rotate={0}></plus-icon>\n      <plus-icon name=\"house\" rotate={90}></plus-icon>\n      <plus-icon name=\"house\" rotate={180}></plus-icon>\n      <plus-icon name=\"house\" rotate={270}></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/rotate",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" rotate={0}></plus-icon>\n  <plus-icon name=\"house\" rotate={90}></plus-icon>\n  <plus-icon name=\"house\" rotate={180}></plus-icon>\n  <plus-icon name=\"house\" rotate={270}></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/rotate",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" :rotate=\"0\"></plus-icon>\n  <plus-icon name=\"house\" :rotate=\"90\"></plus-icon>\n  <plus-icon name=\"house\" :rotate=\"180\"></plus-icon>\n  <plus-icon name=\"house\" :rotate=\"270\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/size-overriding",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-icon[size='xs'] {\n  height: 1em;\n  width: 1em;\n}\nplus-icon[size='sm'] {\n  height: 1.25em;\n  width: 1.25em;\n}\nplus-icon[size='md'] {\n  height: 1.5em;\n  width: 1.5em;\n}\nplus-icon[size='lg'] {\n  height: 1.75em;\n  width: 1.75em;\n}\nplus-icon[size='xl'] {\n  height: 2em;\n  width: 2em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/size-overriding",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-icon[size='xs'] {\n  height: 1em;\n  width: 1em;\n}\nplus-icon[size='sm'] {\n  height: 1.25em;\n  width: 1.25em;\n}\nplus-icon[size='md'] {\n  height: 1.5em;\n  width: 1.5em;\n}\nplus-icon[size='lg'] {\n  height: 1.75em;\n  width: 1.75em;\n}\nplus-icon[size='xl'] {\n  height: 2em;\n  width: 2em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/size-overriding",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n      <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n      <plus-icon name=\"house\" size=\"md\"></plus-icon>\n      <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n      <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-icon[size='xs'] {\n  height: 1em;\n  width: 1em;\n}\nplus-icon[size='sm'] {\n  height: 1.25em;\n  width: 1.25em;\n}\nplus-icon[size='md'] {\n  height: 1.5em;\n  width: 1.5em;\n}\nplus-icon[size='lg'] {\n  height: 1.75em;\n  width: 1.75em;\n}\nplus-icon[size='xl'] {\n  height: 2em;\n  width: 2em;\n}\n"
  },
  {
    "key": "react-experimental/icon/size-overriding",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n      <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n      <plus-icon name=\"house\" size=\"md\"></plus-icon>\n      <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n      <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-icon[size='xs'] {\n  height: 1em;\n  width: 1em;\n}\nplus-icon[size='sm'] {\n  height: 1.25em;\n  width: 1.25em;\n}\nplus-icon[size='md'] {\n  height: 1.5em;\n  width: 1.5em;\n}\nplus-icon[size='lg'] {\n  height: 1.75em;\n  width: 1.75em;\n}\nplus-icon[size='xl'] {\n  height: 2em;\n  width: 2em;\n}\n"
  },
  {
    "key": "svelte/icon/size-overriding",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-icon[size='xs'] {\n  height: 1em;\n  width: 1em;\n}\nplus-icon[size='sm'] {\n  height: 1.25em;\n  width: 1.25em;\n}\nplus-icon[size='md'] {\n  height: 1.5em;\n  width: 1.5em;\n}\nplus-icon[size='lg'] {\n  height: 1.75em;\n  width: 1.75em;\n}\nplus-icon[size='xl'] {\n  height: 2em;\n  width: 2em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/size-overriding",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-icon[size='xs'] {\n  height: 1em;\n  width: 1em;\n}\nplus-icon[size='sm'] {\n  height: 1.25em;\n  width: 1.25em;\n}\nplus-icon[size='md'] {\n  height: 1.5em;\n  width: 1.5em;\n}\nplus-icon[size='lg'] {\n  height: 1.75em;\n  width: 1.75em;\n}\nplus-icon[size='xl'] {\n  height: 2em;\n  width: 2em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/icon/size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"1x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"2x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"4x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"5x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"6x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"7x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"8x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"9x\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"1x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"2x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"4x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"5x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"6x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"7x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"8x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"9x\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-stack gap=\"2rem\">\n        <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n        <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n        <plus-icon name=\"house\" size=\"md\"></plus-icon>\n        <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n        <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n      </plus-stack>\n      <plus-stack gap=\"2rem\">\n        <plus-icon name=\"house\" size=\"1x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"2x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"3x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"4x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"5x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"6x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"7x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"8x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"9x\"></plus-icon>\n      </plus-stack>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-stack gap=\"2rem\">\n        <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n        <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n        <plus-icon name=\"house\" size=\"md\"></plus-icon>\n        <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n        <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n      </plus-stack>\n      <plus-stack gap=\"2rem\">\n        <plus-icon name=\"house\" size=\"1x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"2x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"3x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"4x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"5x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"6x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"7x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"8x\"></plus-icon>\n        <plus-icon name=\"house\" size=\"9x\"></plus-icon>\n      </plus-stack>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n  <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n  <plus-icon name=\"house\" size=\"md\"></plus-icon>\n  <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n  <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n</plus-stack>\n<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"1x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"2x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"4x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"5x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"6x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"7x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"8x\"></plus-icon>\n  <plus-icon name=\"house\" size=\"9x\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<div>\n  <plus-stack gap=\"2rem\">\n    <plus-icon name=\"house\" size=\"xs\"></plus-icon>\n    <plus-icon name=\"house\" size=\"sm\"></plus-icon>\n    <plus-icon name=\"house\" size=\"md\"></plus-icon>\n    <plus-icon name=\"house\" size=\"lg\"></plus-icon>\n    <plus-icon name=\"house\" size=\"xl\"></plus-icon>\n  </plus-stack>\n  <plus-stack gap=\"2rem\">\n    <plus-icon name=\"house\" size=\"1x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"2x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"3x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"4x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"5x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"6x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"7x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"8x\"></plus-icon>\n    <plus-icon name=\"house\" size=\"9x\"></plus-icon>\n  </plus-stack>\n</div>\n"
  },
  {
    "key": "angular/icon/wildcard-size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"16\"></plus-icon>\n  <plus-icon name=\"house\" size=\"32px\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3rem\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "javascript/icon/wildcard-size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"16\"></plus-icon>\n  <plus-icon name=\"house\" size=\"32px\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3rem\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "react/icon/wildcard-size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" size=\"16\"></plus-icon>\n      <plus-icon name=\"house\" size=\"32px\"></plus-icon>\n      <plus-icon name=\"house\" size=\"3rem\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/icon/wildcard-size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-icon name=\"house\" size=\"16\"></plus-icon>\n      <plus-icon name=\"house\" size=\"32px\"></plus-icon>\n      <plus-icon name=\"house\" size=\"3rem\"></plus-icon>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/icon/wildcard-size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"16\"></plus-icon>\n  <plus-icon name=\"house\" size=\"32px\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3rem\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "vue/icon/wildcard-size",
    "script": "import '@htmlplus/ui/icon.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-icon name=\"house\" size=\"16\"></plus-icon>\n  <plus-icon name=\"house\" size=\"32px\"></plus-icon>\n  <plus-icon name=\"house\" size=\"3rem\"></plus-icon>\n</plus-stack>\n"
  },
  {
    "key": "angular/intersection/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('status')\n  statusRef!: ElementRef;\n  onPlusChange(event) {\n    this.statusRef.nativeElement.innerHTML = event.detail.isIntersecting\n      ? 'In Viewport'\n      : 'Out of Viewport';\n  }\n}\n",
    "style": ".container {\n  background-color: whitesmoke;\n  height: 20rem;\n  overflow: auto;\n}\n\n.status {\n  color: white;\n  background-color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n}\n\nplus-card {\n  width: 15rem;\n  margin: auto;\n}\n\nplus-intersection {\n  display: block;\n  margin: 40rem auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky top=\"1rem\" [z-index]=\"1\">\n    <plus-center>\n      <div class=\"status\" #status></div>\n    </plus-center>\n  </plus-sticky>\n  <plus-intersection (plus-change)=\"onPlusChange($event)\">\n    <plus-card [elevation]=\"10\">\n      <plus-card-body>\n        <plus-faker></plus-faker>\n      </plus-card-body>\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "javascript/intersection/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/sticky.js';\n\n$intersection.addEventListener('plus-change', (event) => {\n  $status.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';\n});\n",
    "style": ".container {\n  background-color: whitesmoke;\n  height: 20rem;\n  overflow: auto;\n}\n\n.status {\n  color: white;\n  background-color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n}\n\nplus-card {\n  width: 15rem;\n  margin: auto;\n}\n\nplus-intersection {\n  display: block;\n  margin: 40rem auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky top=\"1rem\" z-index=\"1\">\n    <plus-center>\n      <div id=\"$status\" class=\"status\"></div>\n    </plus-center>\n  </plus-sticky>\n  <plus-intersection id=\"$intersection\">\n    <plus-card elevation=\"10\">\n      <plus-card-body>\n        <plus-faker></plus-faker>\n      </plus-card-body>\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "react/intersection/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const statusRef = useRef();\n  const intersectionRef = useRef();\n  useEffect(() => {\n    if (!intersectionRef.current) return;\n    function onPlusChange(event) {\n      statusRef.current.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';\n    }\n    intersectionRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!intersectionRef.current) return;\n      intersectionRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <div className=\"container\">\n      <plus-sticky top=\"1rem\" z-index={1}>\n        <plus-center>\n          <div className=\"status\" ref={statusRef}></div>\n        </plus-center>\n      </plus-sticky>\n      <plus-intersection ref={intersectionRef}>\n        <plus-card elevation={10}>\n          <plus-card-body>\n            <plus-faker></plus-faker>\n          </plus-card-body>\n        </plus-card>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  background-color: whitesmoke;\n  height: 20rem;\n  overflow: auto;\n}\n\n.status {\n  color: white;\n  background-color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n}\n\nplus-card {\n  width: 15rem;\n  margin: auto;\n}\n\nplus-intersection {\n  display: block;\n  margin: 40rem auto;\n}\n"
  },
  {
    "key": "react-experimental/intersection/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const statusRef = useRef();\n  function onPlusChange(event) {\n    statusRef.current.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';\n  }\n  return (\n    <div className=\"container\">\n      <plus-sticky top=\"1rem\" z-index={1}>\n        <plus-center>\n          <div className=\"status\" ref={statusRef}></div>\n        </plus-center>\n      </plus-sticky>\n      <plus-intersection onplus-change={onPlusChange}>\n        <plus-card elevation={10}>\n          <plus-card-body>\n            <plus-faker></plus-faker>\n          </plus-card-body>\n        </plus-card>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  background-color: whitesmoke;\n  height: 20rem;\n  overflow: auto;\n}\n\n.status {\n  color: white;\n  background-color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n}\n\nplus-card {\n  width: 15rem;\n  margin: auto;\n}\n\nplus-intersection {\n  display: block;\n  margin: 40rem auto;\n}\n"
  },
  {
    "key": "svelte/intersection/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/sticky.js';\n\nlet statusRef;\nfunction onPlusChange(event) {\n  statusRef.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';\n}\n",
    "style": ".container {\n  background-color: whitesmoke;\n  height: 20rem;\n  overflow: auto;\n}\n\n.status {\n  color: white;\n  background-color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n}\n\nplus-card {\n  width: 15rem;\n  margin: auto;\n}\n\nplus-intersection {\n  display: block;\n  margin: 40rem auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky top=\"1rem\" z-index={1}>\n    <plus-center>\n      <div class=\"status\" bind:this={statusRef}></div>\n    </plus-center>\n  </plus-sticky>\n  <plus-intersection on:plus-change={onPlusChange}>\n    <plus-card elevation={10}>\n      <plus-card-body>\n        <plus-faker></plus-faker>\n      </plus-card-body>\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "vue/intersection/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/card-body.js';\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/sticky.js';\n\nconst statusRef = ref();\nfunction onPlusChange(event) {\n  statusRef.value.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';\n}\n",
    "style": ".container {\n  background-color: whitesmoke;\n  height: 20rem;\n  overflow: auto;\n}\n\n.status {\n  color: white;\n  background-color: black;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n}\n\nplus-card {\n  width: 15rem;\n  margin: auto;\n}\n\nplus-intersection {\n  display: block;\n  margin: 40rem auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky top=\"1rem\" :z-index=\"1\">\n    <plus-center>\n      <div class=\"status\" ref=\"statusRef\"></div>\n    </plus-center>\n  </plus-sticky>\n  <plus-intersection @plus-change=\"onPlusChange\">\n    <plus-card :elevation=\"10\">\n      <plus-card-body>\n        <plus-faker></plus-faker>\n      </plus-card-body>\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "angular/intersection/lazy-image",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/spinner.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    if (!event.detail.isIntersecting) return;\n    setTimeout(() => {\n      const image = event.target.querySelector('img');\n      const spinner = event.target.querySelector('plus-spinner');\n      const src = image.getAttribute('data-src');\n      image.setAttribute('src', src);\n      image.hidden = false;\n      spinner.hidden = true;\n    }, 1000);\n  }\n}\n",
    "style": ".container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\nimg {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  margin: 0;\n}\n\nimg:not([hidden]) {\n  display: block;\n}\n\nplus-card {\n  display: inline-block;\n}\n\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 50rem auto;\n}\n\nplus-spinner {\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection once (plus-change)=\"onPlusChange($event)\">\n    <plus-card [elevation]=\"10\">\n      <plus-spinner></plus-spinner>\n      <img alt=\"Lazy Image\" hidden data-src=\"https://placekitten.com/200/200\" />\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "javascript/intersection/lazy-image",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/spinner.js';\n\n$intersection.addEventListener('plus-change', (event) => {\n  if (!event.detail.isIntersecting) return;\n  setTimeout(() => {\n    const image = event.target.querySelector('img');\n    const spinner = event.target.querySelector('plus-spinner');\n    const src = image.getAttribute('data-src');\n    image.setAttribute('src', src);\n    image.hidden = false;\n    spinner.hidden = true;\n  }, 1000);\n});\n",
    "style": ".container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\nimg {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  margin: 0;\n}\n\nimg:not([hidden]) {\n  display: block;\n}\n\nplus-card {\n  display: inline-block;\n}\n\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 50rem auto;\n}\n\nplus-spinner {\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection id=\"$intersection\" once>\n    <plus-card elevation=\"10\">\n      <plus-spinner></plus-spinner>\n      <img alt=\"Lazy Image\" hidden data-src=\"https://placekitten.com/200/200\" />\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "react/intersection/lazy-image",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction App() {\n  const intersectionRef = useRef();\n  useEffect(() => {\n    if (!intersectionRef.current) return;\n    function onPlusChange(event) {\n      if (!event.detail.isIntersecting) return;\n      setTimeout(() => {\n        const image = event.target.querySelector('img');\n        const spinner = event.target.querySelector('plus-spinner');\n        const src = image.getAttribute('data-src');\n        image.setAttribute('src', src);\n        image.hidden = false;\n        spinner.hidden = true;\n      }, 1000);\n    }\n    intersectionRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!intersectionRef.current) return;\n      intersectionRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <div className=\"container\">\n      <plus-intersection once ref={intersectionRef}>\n        <plus-card elevation={10}>\n          <plus-spinner></plus-spinner>\n          <img alt=\"Lazy Image\" hidden data-src=\"https://placekitten.com/200/200\" />\n        </plus-card>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\nimg {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  margin: 0;\n}\n\nimg:not([hidden]) {\n  display: block;\n}\n\nplus-card {\n  display: inline-block;\n}\n\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 50rem auto;\n}\n\nplus-spinner {\n  margin: 1rem;\n}\n"
  },
  {
    "key": "react-experimental/intersection/lazy-image",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    if (!event.detail.isIntersecting) return;\n    setTimeout(() => {\n      const image = event.target.querySelector('img');\n      const spinner = event.target.querySelector('plus-spinner');\n      const src = image.getAttribute('data-src');\n      image.setAttribute('src', src);\n      image.hidden = false;\n      spinner.hidden = true;\n    }, 1000);\n  }\n  return (\n    <div className=\"container\">\n      <plus-intersection once onplus-change={onPlusChange}>\n        <plus-card elevation={10}>\n          <plus-spinner></plus-spinner>\n          <img alt=\"Lazy Image\" hidden data-src=\"https://placekitten.com/200/200\" />\n        </plus-card>\n      </plus-intersection>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\nimg {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  margin: 0;\n}\n\nimg:not([hidden]) {\n  display: block;\n}\n\nplus-card {\n  display: inline-block;\n}\n\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 50rem auto;\n}\n\nplus-spinner {\n  margin: 1rem;\n}\n"
  },
  {
    "key": "svelte/intersection/lazy-image",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction onPlusChange(event) {\n  if (!event.detail.isIntersecting) return;\n  setTimeout(() => {\n    const image = event.target.querySelector('img');\n    const spinner = event.target.querySelector('plus-spinner');\n    const src = image.getAttribute('data-src');\n    image.setAttribute('src', src);\n    image.hidden = false;\n    spinner.hidden = true;\n  }, 1000);\n}\n",
    "style": ".container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\nimg {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  margin: 0;\n}\n\nimg:not([hidden]) {\n  display: block;\n}\n\nplus-card {\n  display: inline-block;\n}\n\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 50rem auto;\n}\n\nplus-spinner {\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection once on:plus-change={onPlusChange}>\n    <plus-card elevation={10}>\n      <plus-spinner></plus-spinner>\n      <img alt=\"Lazy Image\" hidden data-src=\"https://placekitten.com/200/200\" />\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "vue/intersection/lazy-image",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/card.js';\nimport '@htmlplus/ui/intersection.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction onPlusChange(event) {\n  if (!event.detail.isIntersecting) return;\n  setTimeout(() => {\n    const image = event.target.querySelector('img');\n    const spinner = event.target.querySelector('plus-spinner');\n    const src = image.getAttribute('data-src');\n    image.setAttribute('src', src);\n    image.hidden = false;\n    spinner.hidden = true;\n  }, 1000);\n}\n",
    "style": ".container {\n  position: relative;\n  height: 20rem;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\nimg {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  margin: 0;\n}\n\nimg:not([hidden]) {\n  display: block;\n}\n\nplus-card {\n  display: inline-block;\n}\n\nplus-intersection {\n  display: block;\n  text-align: center;\n  margin: 50rem auto;\n}\n\nplus-spinner {\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-intersection once @plus-change=\"onPlusChange\">\n    <plus-card :elevation=\"10\">\n      <plus-spinner></plus-spinner>\n      <img alt=\"Lazy Image\" hidden data-src=\"https://placekitten.com/200/200\" />\n    </plus-card>\n  </plus-intersection>\n</div>\n"
  },
  {
    "key": "angular/progress-bar/aria-label",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar aria-label=\"With Label\" [value]=\"100\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/aria-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar aria-label=\"With Label\" value=\"100\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/aria-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar aria-label=\"With Label\" value={100}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/aria-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar aria-label=\"With Label\" value={100}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/aria-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar aria-label=\"With Label\" value={100}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/aria-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar aria-label=\"With Label\" :value=\"100\"></plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/buffer",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar [value]=\"50\" [buffer]=\"75\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/buffer",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar value=\"50\" buffer=\"75\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/buffer",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={50} buffer={75}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/buffer",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={50} buffer={75}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/buffer",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar value={50} buffer={75}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/buffer",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar :value=\"50\" :buffer=\"75\"></plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar color=\"lightseagreen\" [value]=\"50\"></plus-progress-bar>\n<br />\n<plus-progress-bar color=\"#FFA500\" [value]=\"30\"></plus-progress-bar>\n<br />\n<plus-progress-bar color=\"rgb(138,43,226)\" [value]=\"70\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar color=\"lightseagreen\" value=\"50\"></plus-progress-bar>\n<br />\n<plus-progress-bar color=\"#FFA500\" value=\"30\"></plus-progress-bar>\n<br />\n<plus-progress-bar color=\"rgb(138,43,226)\" value=\"70\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar color=\"lightseagreen\" value={50}></plus-progress-bar>\n      <br />\n      <plus-progress-bar color=\"#FFA500\" value={30}></plus-progress-bar>\n      <br />\n      <plus-progress-bar color=\"rgb(138,43,226)\" value={70}></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar color=\"lightseagreen\" value={50}></plus-progress-bar>\n      <br />\n      <plus-progress-bar color=\"#FFA500\" value={30}></plus-progress-bar>\n      <br />\n      <plus-progress-bar color=\"rgb(138,43,226)\" value={70}></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar color=\"lightseagreen\" value={50}></plus-progress-bar>\n<br />\n<plus-progress-bar color=\"#FFA500\" value={30}></plus-progress-bar>\n<br />\n<plus-progress-bar color=\"rgb(138,43,226)\" value={70}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<div>\n  <plus-progress-bar color=\"lightseagreen\" :value=\"50\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar color=\"#FFA500\" :value=\"30\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar color=\"rgb(138,43,226)\" :value=\"70\"></plus-progress-bar>\n</div>\n"
  },
  {
    "key": "angular/progress-bar/custom-color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-progress-bar[color='primary'] {\n  --plus-progress-bar-indicator-background-color: #00bfff;\n}\nplus-progress-bar[color='secondary'] {\n  --plus-progress-bar-indicator-background-color: #7cfc00;\n}\nplus-progress-bar[color='tertiary'] {\n  --plus-progress-bar-indicator-background-color: #ff1493;\n}\n",
    "template": "<plus-progress-bar [value]=\"50\" color=\"primary\"></plus-progress-bar>\n<br />\n<plus-progress-bar [value]=\"30\" color=\"secondary\"></plus-progress-bar>\n<br />\n<plus-progress-bar [value]=\"70\" color=\"tertiary\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/custom-color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar[color='primary'] {\n  --plus-progress-bar-indicator-background-color: #00bfff;\n}\nplus-progress-bar[color='secondary'] {\n  --plus-progress-bar-indicator-background-color: #7cfc00;\n}\nplus-progress-bar[color='tertiary'] {\n  --plus-progress-bar-indicator-background-color: #ff1493;\n}\n",
    "template": "<plus-progress-bar value=\"50\" color=\"primary\"></plus-progress-bar>\n<br />\n<plus-progress-bar value=\"30\" color=\"secondary\"></plus-progress-bar>\n<br />\n<plus-progress-bar value=\"70\" color=\"tertiary\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/custom-color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar value={50} color=\"primary\"></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={30} color=\"secondary\"></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={70} color=\"tertiary\"></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-progress-bar[color='primary'] {\n  --plus-progress-bar-indicator-background-color: #00bfff;\n}\nplus-progress-bar[color='secondary'] {\n  --plus-progress-bar-indicator-background-color: #7cfc00;\n}\nplus-progress-bar[color='tertiary'] {\n  --plus-progress-bar-indicator-background-color: #ff1493;\n}\n"
  },
  {
    "key": "react-experimental/progress-bar/custom-color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar value={50} color=\"primary\"></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={30} color=\"secondary\"></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={70} color=\"tertiary\"></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-progress-bar[color='primary'] {\n  --plus-progress-bar-indicator-background-color: #00bfff;\n}\nplus-progress-bar[color='secondary'] {\n  --plus-progress-bar-indicator-background-color: #7cfc00;\n}\nplus-progress-bar[color='tertiary'] {\n  --plus-progress-bar-indicator-background-color: #ff1493;\n}\n"
  },
  {
    "key": "svelte/progress-bar/custom-color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar[color='primary'] {\n  --plus-progress-bar-indicator-background-color: #00bfff;\n}\nplus-progress-bar[color='secondary'] {\n  --plus-progress-bar-indicator-background-color: #7cfc00;\n}\nplus-progress-bar[color='tertiary'] {\n  --plus-progress-bar-indicator-background-color: #ff1493;\n}\n",
    "template": "<plus-progress-bar value={50} color=\"primary\"></plus-progress-bar>\n<br />\n<plus-progress-bar value={30} color=\"secondary\"></plus-progress-bar>\n<br />\n<plus-progress-bar value={70} color=\"tertiary\"></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/custom-color",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar[color='primary'] {\n  --plus-progress-bar-indicator-background-color: #00bfff;\n}\nplus-progress-bar[color='secondary'] {\n  --plus-progress-bar-indicator-background-color: #7cfc00;\n}\nplus-progress-bar[color='tertiary'] {\n  --plus-progress-bar-indicator-background-color: #ff1493;\n}\n",
    "template": "<div>\n  <plus-progress-bar :value=\"50\" color=\"primary\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar :value=\"30\" color=\"secondary\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar :value=\"70\" color=\"tertiary\"></plus-progress-bar>\n</div>\n"
  },
  {
    "key": "angular/progress-bar/custom-label",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar [value]=\"75\">Custom label for value of 75</plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/custom-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar value=\"75\">Custom label for value of 75</plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/custom-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={75}>Custom label for value of 75</plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/custom-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={75}>Custom label for value of 75</plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/custom-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar value={75}>Custom label for value of 75</plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/custom-label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar :value=\"75\">Custom label for value of 75</plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/customized",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-progress-bar {\n  border-radius: 1rem;\n  background-color: transparent;\n  border: solid 0.3rem transparent;\n  outline: solid 0.15rem gainsboro;\n}\n\nplus-progress-bar::part(buffer) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n\nplus-progress-bar::part(indicator) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n",
    "template": "<plus-progress-bar [value]=\"60\" [buffer]=\"80\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/customized",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar {\n  border-radius: 1rem;\n  background-color: transparent;\n  border: solid 0.3rem transparent;\n  outline: solid 0.15rem gainsboro;\n}\n\nplus-progress-bar::part(buffer) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n\nplus-progress-bar::part(indicator) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n",
    "template": "<plus-progress-bar value=\"60\" buffer=\"80\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/customized",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={60} buffer={80}></plus-progress-bar>;\n}\nexport default App;\n",
    "style": "plus-progress-bar {\n  border-radius: 1rem;\n  background-color: transparent;\n  border: solid 0.3rem transparent;\n  outline: solid 0.15rem gainsboro;\n}\n\nplus-progress-bar::part(buffer) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n\nplus-progress-bar::part(indicator) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n"
  },
  {
    "key": "react-experimental/progress-bar/customized",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={60} buffer={80}></plus-progress-bar>;\n}\nexport default App;\n",
    "style": "plus-progress-bar {\n  border-radius: 1rem;\n  background-color: transparent;\n  border: solid 0.3rem transparent;\n  outline: solid 0.15rem gainsboro;\n}\n\nplus-progress-bar::part(buffer) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n\nplus-progress-bar::part(indicator) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n"
  },
  {
    "key": "svelte/progress-bar/customized",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar {\n  border-radius: 1rem;\n  background-color: transparent;\n  border: solid 0.3rem transparent;\n  outline: solid 0.15rem gainsboro;\n}\n\nplus-progress-bar::part(buffer) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n\nplus-progress-bar::part(indicator) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n",
    "template": "<plus-progress-bar value={60} buffer={80}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/customized",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar {\n  border-radius: 1rem;\n  background-color: transparent;\n  border: solid 0.3rem transparent;\n  outline: solid 0.15rem gainsboro;\n}\n\nplus-progress-bar::part(buffer) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n\nplus-progress-bar::part(indicator) {\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));\n}\n",
    "template": "<plus-progress-bar :value=\"60\" :buffer=\"80\"></plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/default",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/default",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/default",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/default",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/default",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar></plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/height",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-progress-bar.thin {\n  height: 2px;\n}\nplus-progress-bar.thick {\n  height: 1.5rem;\n}\n",
    "template": "<plus-progress-bar [value]=\"50\" class=\"thin\"></plus-progress-bar>\n<br />\n<plus-progress-bar [value]=\"50\"></plus-progress-bar>\n<br />\n<plus-progress-bar [value]=\"50\" class=\"thick\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/height",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar.thin {\n  height: 2px;\n}\nplus-progress-bar.thick {\n  height: 1.5rem;\n}\n",
    "template": "<plus-progress-bar value=\"50\" class=\"thin\"></plus-progress-bar>\n<br />\n<plus-progress-bar value=\"50\"></plus-progress-bar>\n<br />\n<plus-progress-bar value=\"50\" class=\"thick\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/height",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar value={50} class=\"thin\"></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={50}></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={50} class=\"thick\"></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-progress-bar.thin {\n  height: 2px;\n}\nplus-progress-bar.thick {\n  height: 1.5rem;\n}\n"
  },
  {
    "key": "react-experimental/progress-bar/height",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar value={50} className=\"thin\"></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={50}></plus-progress-bar>\n      <br />\n      <plus-progress-bar value={50} className=\"thick\"></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n",
    "style": "plus-progress-bar.thin {\n  height: 2px;\n}\nplus-progress-bar.thick {\n  height: 1.5rem;\n}\n"
  },
  {
    "key": "svelte/progress-bar/height",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar.thin {\n  height: 2px;\n}\nplus-progress-bar.thick {\n  height: 1.5rem;\n}\n",
    "template": "<plus-progress-bar value={50} class=\"thin\"></plus-progress-bar>\n<br />\n<plus-progress-bar value={50}></plus-progress-bar>\n<br />\n<plus-progress-bar value={50} class=\"thick\"></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/height",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "style": "plus-progress-bar.thin {\n  height: 2px;\n}\nplus-progress-bar.thick {\n  height: 1.5rem;\n}\n",
    "template": "<div>\n  <plus-progress-bar :value=\"50\" class=\"thin\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar :value=\"50\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar :value=\"50\" class=\"thick\"></plus-progress-bar>\n</div>\n"
  },
  {
    "key": "angular/progress-bar/indeterminate",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar variant=\"indeterminate\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/indeterminate",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar variant=\"indeterminate\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/indeterminate",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar variant=\"indeterminate\"></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/indeterminate",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar variant=\"indeterminate\"></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/indeterminate",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar variant=\"indeterminate\"></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/indeterminate",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar variant=\"indeterminate\"></plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/label",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar label [value]=\"75\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar label value=\"75\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar label value={75}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar label value={75}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar label value={75}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/label",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar label :value=\"75\"></plus-progress-bar>\n"
  },
  {
    "key": "angular/progress-bar/min-and-max",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar [min]=\"0.0\" [max]=\"1.0\" [value]=\"0.25\"></plus-progress-bar>\n<br />\n<plus-progress-bar [min]=\"-10\" [max]=\"+10\" [value]=\"0.00\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/min-and-max",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar min=\"0.0\" max=\"1.0\" value=\"0.25\"></plus-progress-bar>\n<br />\n<plus-progress-bar min=\"-10\" max=\"+10\" value=\"0.00\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/min-and-max",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar min={0} max={1} value={0.25}></plus-progress-bar>\n      <br />\n      <plus-progress-bar min={-10} max={10} value={0}></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/min-and-max",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-progress-bar min={0} max={1} value={0.25}></plus-progress-bar>\n      <br />\n      <plus-progress-bar min={-10} max={10} value={0}></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/min-and-max",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar min={0} max={1} value={0.25}></plus-progress-bar>\n<br />\n<plus-progress-bar min={-10} max={10} value={0}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/min-and-max",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<div>\n  <plus-progress-bar :min=\"0.0\" :max=\"1.0\" :value=\"0.25\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar :min=\"-10\" :max=\"+10\" :value=\"0.00\"></plus-progress-bar>\n</div>\n"
  },
  {
    "key": "angular/progress-bar/stacked",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar-stack.js';\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar-stack>\n  <plus-progress-bar color=\"#32CD32\" [value]=\"50\"></plus-progress-bar>\n  <plus-progress-bar color=\"#FFA500\" [value]=\"25\"></plus-progress-bar>\n  <plus-progress-bar color=\"#FF0000\" [value]=\"10\"></plus-progress-bar>\n</plus-progress-bar-stack>\n"
  },
  {
    "key": "javascript/progress-bar/stacked",
    "script": "import '@htmlplus/ui/progress-bar-stack.js';\nimport '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar-stack>\n  <plus-progress-bar color=\"#32CD32\" value=\"50\"></plus-progress-bar>\n  <plus-progress-bar color=\"#FFA500\" value=\"25\"></plus-progress-bar>\n  <plus-progress-bar color=\"#FF0000\" value=\"10\"></plus-progress-bar>\n</plus-progress-bar-stack>\n"
  },
  {
    "key": "react/progress-bar/stacked",
    "script": "import '@htmlplus/ui/progress-bar-stack.js';\nimport '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <plus-progress-bar-stack>\n      <plus-progress-bar color=\"#32CD32\" value={50}></plus-progress-bar>\n      <plus-progress-bar color=\"#FFA500\" value={25}></plus-progress-bar>\n      <plus-progress-bar color=\"#FF0000\" value={10}></plus-progress-bar>\n    </plus-progress-bar-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/stacked",
    "script": "import '@htmlplus/ui/progress-bar-stack.js';\nimport '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return (\n    <plus-progress-bar-stack>\n      <plus-progress-bar color=\"#32CD32\" value={50}></plus-progress-bar>\n      <plus-progress-bar color=\"#FFA500\" value={25}></plus-progress-bar>\n      <plus-progress-bar color=\"#FF0000\" value={10}></plus-progress-bar>\n    </plus-progress-bar-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/stacked",
    "script": "import '@htmlplus/ui/progress-bar-stack.js';\nimport '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar-stack>\n  <plus-progress-bar color=\"#32CD32\" value={50}></plus-progress-bar>\n  <plus-progress-bar color=\"#FFA500\" value={25}></plus-progress-bar>\n  <plus-progress-bar color=\"#FF0000\" value={10}></plus-progress-bar>\n</plus-progress-bar-stack>\n"
  },
  {
    "key": "vue/progress-bar/stacked",
    "script": "import '@htmlplus/ui/progress-bar-stack.js';\nimport '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar-stack>\n  <plus-progress-bar color=\"#32CD32\" :value=\"50\"></plus-progress-bar>\n  <plus-progress-bar color=\"#FFA500\" :value=\"25\"></plus-progress-bar>\n  <plus-progress-bar color=\"#FF0000\" :value=\"10\"></plus-progress-bar>\n</plus-progress-bar-stack>\n"
  },
  {
    "key": "angular/progress-bar/sync",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('latency')\n  latencyRef!: ElementRef;\n  @ViewChild('sync')\n  syncRef!: ElementRef;\n  update() {\n    if (!this.syncRef.nativeElement || !this.latencyRef.nativeElement) return;\n    const value = Math.random() * 100;\n    this.syncRef.nativeElement.value = value;\n    this.latencyRef.nativeElement.value = value;\n    setTimeout(() => this.update(), 100);\n  }\n  ngAfterViewInit() {\n    this.update();\n  }\n}\n",
    "template": "<plus-progress-bar sync #sync></plus-progress-bar>\n<br />\n<plus-progress-bar #latency></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/sync",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction update() {\n  if (!$sync || !$latency) return;\n  const value = Math.random() * 100;\n  $sync.value = value;\n  $latency.value = value;\n  setTimeout(() => update(), 100);\n}\nupdate();\n",
    "template": "<plus-progress-bar id=\"$sync\" sync></plus-progress-bar>\n<br />\n<plus-progress-bar id=\"$latency\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/sync",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  const latencyRef = useRef();\n  const syncRef = useRef();\n  function update() {\n    if (!syncRef.current || !latencyRef.current) return;\n    const value = Math.random() * 100;\n    syncRef.current.value = value;\n    latencyRef.current.value = value;\n    setTimeout(() => update(), 100);\n  }\n  useEffect(() => {\n    update();\n  }, []);\n  return (\n    <>\n      <plus-progress-bar sync ref={syncRef}></plus-progress-bar>\n      <br />\n      <plus-progress-bar ref={latencyRef}></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/sync",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  const latencyRef = useRef();\n  const syncRef = useRef();\n  function update() {\n    if (!syncRef.current || !latencyRef.current) return;\n    const value = Math.random() * 100;\n    syncRef.current.value = value;\n    latencyRef.current.value = value;\n    setTimeout(() => update(), 100);\n  }\n  useEffect(() => {\n    update();\n  }, []);\n  return (\n    <>\n      <plus-progress-bar sync ref={syncRef}></plus-progress-bar>\n      <br />\n      <plus-progress-bar ref={latencyRef}></plus-progress-bar>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/sync",
    "script": "import { onMount } from 'svelte';\n\nimport '@htmlplus/ui/progress-bar.js';\n\nlet latencyRef;\nlet syncRef;\nfunction update() {\n  if (!syncRef || !latencyRef) return;\n  const value = Math.random() * 100;\n  syncRef.value = value;\n  latencyRef.value = value;\n  setTimeout(() => update(), 100);\n}\nonMount(() => {\n  update();\n});\n",
    "template": "<plus-progress-bar sync bind:this={syncRef}></plus-progress-bar>\n<br />\n<plus-progress-bar bind:this={latencyRef}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/sync",
    "script": "import { onMounted, ref } from 'vue';\n\nimport '@htmlplus/ui/progress-bar.js';\n\nconst latencyRef = ref();\nconst syncRef = ref();\nfunction update() {\n  if (!syncRef.value || !latencyRef.value) return;\n  const value = Math.random() * 100;\n  syncRef.value.value = value;\n  latencyRef.value.value = value;\n  setTimeout(() => update(), 100);\n}\nonMounted(() => {\n  update();\n});\n",
    "template": "<div>\n  <plus-progress-bar sync ref=\"syncRef\"></plus-progress-bar>\n  <br />\n  <plus-progress-bar ref=\"latencyRef\"></plus-progress-bar>\n</div>\n"
  },
  {
    "key": "angular/progress-bar/value",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/progress-bar.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-progress-bar [value]=\"25\"></plus-progress-bar>\n"
  },
  {
    "key": "javascript/progress-bar/value",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar value=\"25\"></plus-progress-bar>\n"
  },
  {
    "key": "react/progress-bar/value",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={25}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/progress-bar/value",
    "script": "import '@htmlplus/ui/progress-bar.js';\n\nfunction App() {\n  return <plus-progress-bar value={25}></plus-progress-bar>;\n}\nexport default App;\n"
  },
  {
    "key": "svelte/progress-bar/value",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar value={25}></plus-progress-bar>\n"
  },
  {
    "key": "vue/progress-bar/value",
    "script": "import '@htmlplus/ui/progress-bar.js';\n",
    "template": "<plus-progress-bar :value=\"25\"></plus-progress-bar>\n"
  },
  {
    "key": "angular/scroll-detector/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    console.log(event.detail);\n  }\n}\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <div class=\"scrollable reference1\">\n    <plus-faker api=\"lorem.paragraphs\" [arguments]='[20, \"\\n\\n\"]'></plus-faker>\n  </div>\n  <plus-scroll-detector\n    reference=\".reference1\"\n    vertical\n    (plus-change)=\"onPlusChange($event)\"\n  ></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "javascript/scroll-detector/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\n$detector.addEventListener('plus-change', (event) => {\n  console.log(event.detail);\n});\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <div class=\"scrollable reference1\">\n    <plus-faker api=\"lorem.paragraphs\" arguments='[20, \"\\n\\n\"]'></plus-faker>\n  </div>\n  <plus-scroll-detector id=\"$detector\" reference=\".reference1\" vertical></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "react/scroll-detector/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  const detectorRef = useRef();\n  useEffect(() => {\n    if (!detectorRef.current) return;\n    function onPlusChange(event) {\n      console.log(event.detail);\n    }\n    detectorRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!detectorRef.current) return;\n      detectorRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  useEffect(() => {\n    plusFakerRef.current.arguments = [20, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <div className=\"scrollable reference1\">\n        <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n      </div>\n      <plus-scroll-detector\n        reference=\".reference1\"\n        vertical\n        ref={detectorRef}\n      ></plus-scroll-detector>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  height: 20em;\n  overflow-y: auto;\n}\n"
  },
  {
    "key": "react-experimental/scroll-detector/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    console.log(event.detail);\n  }\n  return (\n    <div className=\"container\">\n      <div className=\"scrollable reference1\">\n        <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n      </div>\n      <plus-scroll-detector\n        reference=\".reference1\"\n        vertical\n        onplus-change={onPlusChange}\n      ></plus-scroll-detector>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  height: 20em;\n  overflow-y: auto;\n}\n"
  },
  {
    "key": "svelte/scroll-detector/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nfunction onPlusChange(event) {\n  console.log(event.detail);\n}\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <div class=\"scrollable reference1\">\n    <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n  </div>\n  <plus-scroll-detector reference=\".reference1\" vertical on:plus-change={onPlusChange}\n  ></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "vue/scroll-detector/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nfunction onPlusChange(event) {\n  console.log(event.detail);\n}\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <div class=\"scrollable reference1\">\n    <plus-faker api=\"lorem.paragraphs\" :arguments='[20, \"\\n\\n\"]'></plus-faker>\n  </div>\n  <plus-scroll-detector\n    reference=\".reference1\"\n    vertical\n    @plus-change=\"onPlusChange\"\n  ></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "angular/scroll-detector/scroll-indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  value = 0;\n  onPlusChange(event) {\n    this.value = event.detail.progress;\n  }\n}\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  padding: 1rem;\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-progress-bar [value]=\"value\"></plus-progress-bar>\n  <div class=\"scrollable reference2\">\n    <plus-faker api=\"lorem.paragraphs\" [arguments]='[20, \"\\n\\n\"]' [seed]=\"0\"></plus-faker>\n  </div>\n  <plus-scroll-detector\n    reference=\".reference2\"\n    vertical\n    (plus-change)=\"onPlusChange($event)\"\n  ></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "javascript/scroll-detector/scroll-indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\n$detector.addEventListener('plus-change', (event) => {\n  $progressbar.value = event.detail.progress;\n});\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  padding: 1rem;\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-progress-bar id=\"$progressbar\" value=\"0\"></plus-progress-bar>\n  <div class=\"scrollable reference2\">\n    <plus-faker api=\"lorem.paragraphs\" arguments='[20, \"\\n\\n\"]' seed=\"0\"></plus-faker>\n  </div>\n  <plus-scroll-detector id=\"$detector\" reference=\".reference2\" vertical></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "react/scroll-detector/scroll-indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef, useState } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  const detectorRef = useRef();\n  const [value, setValue] = useState(0);\n  useEffect(() => {\n    if (!detectorRef.current) return;\n    function onPlusChange(event) {\n      setValue(event.detail.progress);\n    }\n    detectorRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!detectorRef.current) return;\n      detectorRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  useEffect(() => {\n    plusFakerRef.current.arguments = [20, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <plus-progress-bar value={value}></plus-progress-bar>\n      <div className=\"scrollable reference2\">\n        <plus-faker api=\"lorem.paragraphs\" seed={0} ref={plusFakerRef}></plus-faker>\n      </div>\n      <plus-scroll-detector\n        reference=\".reference2\"\n        vertical\n        ref={detectorRef}\n      ></plus-scroll-detector>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  padding: 1rem;\n  height: 20em;\n  overflow-y: auto;\n}\n"
  },
  {
    "key": "react-experimental/scroll-detector/scroll-indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useState } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nfunction App() {\n  const [value, setValue] = useState(0);\n  function onPlusChange(event) {\n    setValue(event.detail.progress);\n  }\n  return (\n    <div className=\"container\">\n      <plus-progress-bar value={value}></plus-progress-bar>\n      <div className=\"scrollable reference2\">\n        <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']} seed={0}></plus-faker>\n      </div>\n      <plus-scroll-detector\n        reference=\".reference2\"\n        vertical\n        onplus-change={onPlusChange}\n      ></plus-scroll-detector>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  padding: 1rem;\n  height: 20em;\n  overflow-y: auto;\n}\n"
  },
  {
    "key": "svelte/scroll-detector/scroll-indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nlet value = 0;\nfunction onPlusChange(event) {\n  value = event.detail.progress;\n}\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  padding: 1rem;\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-progress-bar {value}></plus-progress-bar>\n  <div class=\"scrollable reference2\">\n    <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']} seed={0}></plus-faker>\n  </div>\n  <plus-scroll-detector reference=\".reference2\" vertical on:plus-change={onPlusChange}\n  ></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "vue/scroll-detector/scroll-indicator",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/progress-bar.js';\nimport '@htmlplus/ui/scroll-detector.js';\n\nconst value = ref(0);\nfunction onPlusChange(event) {\n  value.value = event.detail.progress;\n}\n",
    "style": ".container {\n  position: relative;\n}\n.scrollable {\n  padding: 1rem;\n  height: 20em;\n  overflow-y: auto;\n}\n",
    "template": "<div class=\"container\">\n  <plus-progress-bar :value=\"value\"></plus-progress-bar>\n  <div class=\"scrollable reference2\">\n    <plus-faker api=\"lorem.paragraphs\" :arguments='[20, \"\\n\\n\"]' :seed=\"0\"></plus-faker>\n  </div>\n  <plus-scroll-detector\n    reference=\".reference2\"\n    vertical\n    @plus-change=\"onPlusChange\"\n  ></plus-scroll-detector>\n</div>\n"
  },
  {
    "key": "angular/signature/clear-on-resize",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" clear-on-resize resizable></plus-signature>\n"
  },
  {
    "key": "javascript/signature/clear-on-resize",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" clear-on-resize resizable></plus-signature>\n"
  },
  {
    "key": "react/signature/clear-on-resize",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return <plus-signature background-color=\"lightgray\" clear-on-resize resizable></plus-signature>;\n}\nexport default App;\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n"
  },
  {
    "key": "react-experimental/signature/clear-on-resize",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return <plus-signature background-color=\"lightgray\" clear-on-resize resizable></plus-signature>;\n}\nexport default App;\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n"
  },
  {
    "key": "svelte/signature/clear-on-resize",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" clear-on-resize resizable></plus-signature>\n"
  },
  {
    "key": "vue/signature/clear-on-resize",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" clear-on-resize resizable></plus-signature>\n"
  },
  {
    "key": "angular/signature/clear",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('signature')\n  signatureRef!: ElementRef;\n  onClick() {\n    this.signatureRef.nativeElement.value = '';\n  }\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" #signature></plus-signature>\n</plus-center>\n<br />\n<plus-center>\n  <button (click)=\"onClick()\">Clear</button>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/clear",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n$button.addEventListener('click', () => {\n  $signature.value = '';\n});\n",
    "template": "<plus-center>\n  <plus-signature id=\"$signature\" background-color=\"lightgray\"></plus-signature>\n</plus-center>\n<br />\n<plus-center>\n  <button id=\"$button\">Clear</button>\n</plus-center>\n"
  },
  {
    "key": "react/signature/clear",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  function onClick() {\n    signatureRef.current.value = '';\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-signature background-color=\"lightgray\" ref={signatureRef}></plus-signature>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onClick={onClick}>Clear</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/clear",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  function onClick() {\n    signatureRef.current.value = '';\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-signature background-color=\"lightgray\" ref={signatureRef}></plus-signature>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onclick={onClick}>Clear</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/clear",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nlet signatureRef;\nfunction onClick() {\n  signatureRef.value = '';\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" bind:this={signatureRef}></plus-signature>\n</plus-center>\n<br />\n<plus-center>\n  <button on:click={onClick}>Clear</button>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/clear",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nconst signatureRef = ref();\nfunction onClick() {\n  signatureRef.value.value = '';\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-signature background-color=\"lightgray\" ref=\"signatureRef\"></plus-signature>\n  </plus-center>\n  <br />\n  <plus-center>\n    <button @click=\"onClick\">Clear</button>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/signature/color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" color=\"blue\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/color",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" color=\"blue\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/color",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" color=\"blue\"></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/color",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" color=\"blue\"></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/color",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" color=\"blue\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/color",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" color=\"blue\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/signature/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\"></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\"></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/signature/dimensions",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-signature {\n  height: 320px;\n  width: 480px;\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/dimensions",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 320px;\n  width: 480px;\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/dimensions",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\"></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-signature {\n  height: 320px;\n  width: 480px;\n}\n"
  },
  {
    "key": "react-experimental/signature/dimensions",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\"></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-signature {\n  height: 320px;\n  width: 480px;\n}\n"
  },
  {
    "key": "svelte/signature/dimensions",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 320px;\n  width: 480px;\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/dimensions",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 320px;\n  width: 480px;\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/signature/disabled",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" disabled></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" disabled></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" disabled></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" disabled></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" disabled></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" disabled></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/signature/distance",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" [distance]=\"10\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/distance",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" distance=\"10\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/distance",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" distance={10}></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/distance",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" distance={10}></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/distance",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" distance={10}></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/distance",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" :distance=\"10\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/signature/history",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('signature')\n  signatureRef!: ElementRef;\n  disabled2 = true;\n  disabled1 = true;\n  sync() {\n    this.disabled1 = !this.signatureRef.nativeElement.undoable;\n    this.disabled2 = !this.signatureRef.nativeElement.redoable;\n  }\n  onClick1() {\n    this.signatureRef.nativeElement.undo();\n    this.sync();\n  }\n  onClick2() {\n    this.signatureRef.nativeElement.redo();\n    this.sync();\n  }\n  onPlusEnd() {\n    this.sync();\n  }\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" (plus-end)=\"onPlusEnd()\" #signature></plus-signature>\n</plus-center>\n<br />\n<plus-stack gap=\"1rem\">\n  <button (click)=\"onClick1()\" [disabled]=\"disabled1\">Undo</button>\n  <button (click)=\"onClick2()\" [disabled]=\"disabled2\">Redo</button>\n</plus-stack>\n"
  },
  {
    "key": "javascript/signature/history",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\nimport '@htmlplus/ui/stack.js';\n\nconst sync = () => {\n  $undo.disabled = !$signature.undoable;\n  $redo.disabled = !$signature.redoable;\n};\n$undo.addEventListener('click', () => {\n  $signature.undo();\n  sync();\n});\n$redo.addEventListener('click', () => {\n  $signature.redo();\n  sync();\n});\n$signature.addEventListener('plus-end', () => {\n  sync();\n});\n",
    "template": "<plus-center>\n  <plus-signature id=\"$signature\" background-color=\"lightgray\"></plus-signature>\n</plus-center>\n<br />\n<plus-stack gap=\"1rem\">\n  <button id=\"$undo\" disabled>Undo</button>\n  <button id=\"$redo\" disabled>Redo</button>\n</plus-stack>\n"
  },
  {
    "key": "react/signature/history",
    "script": "import { useEffect, useRef, useState } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  const [disabled2, setDisabled2] = useState(true);\n  const [disabled1, setDisabled1] = useState(true);\n  const sync = () => {\n    setDisabled1(!signatureRef.current.undoable);\n    setDisabled2(!signatureRef.current.redoable);\n  };\n  function onClick1() {\n    signatureRef.current.undo();\n    sync();\n  }\n  function onClick2() {\n    signatureRef.current.redo();\n    sync();\n  }\n  useEffect(() => {\n    if (!signatureRef.current) return;\n    function onPlusEnd() {\n      sync();\n    }\n    signatureRef.current.addEventListener('plus-end', onPlusEnd);\n    return () => {\n      if (!signatureRef.current) return;\n      signatureRef.current.removeEventListener('plus-end', onPlusEnd);\n    };\n  });\n  return (\n    <>\n      <plus-center>\n        <plus-signature background-color=\"lightgray\" ref={signatureRef}></plus-signature>\n      </plus-center>\n      <br />\n      <plus-stack gap=\"1rem\">\n        <button disabled={disabled1} onClick={onClick1}>\n          Undo\n        </button>\n        <button disabled={disabled2} onClick={onClick2}>\n          Redo\n        </button>\n      </plus-stack>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/history",
    "script": "import { useRef, useState } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  const [disabled2, setDisabled2] = useState(true);\n  const [disabled1, setDisabled1] = useState(true);\n  const sync = () => {\n    setDisabled1(!signatureRef.current.undoable);\n    setDisabled2(!signatureRef.current.redoable);\n  };\n  function onClick1() {\n    signatureRef.current.undo();\n    sync();\n  }\n  function onClick2() {\n    signatureRef.current.redo();\n    sync();\n  }\n  function onPlusEnd() {\n    sync();\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-signature\n          background-color=\"lightgray\"\n          onplus-end={onPlusEnd}\n          ref={signatureRef}\n        ></plus-signature>\n      </plus-center>\n      <br />\n      <plus-stack gap=\"1rem\">\n        <button disabled={disabled1} onclick={onClick1}>\n          Undo\n        </button>\n        <button disabled={disabled2} onclick={onClick2}>\n          Redo\n        </button>\n      </plus-stack>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/history",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\nimport '@htmlplus/ui/stack.js';\n\nlet signatureRef;\nlet disabled2 = true;\nlet disabled1 = true;\nconst sync = () => {\n  disabled1 = !signatureRef.undoable;\n  disabled2 = !signatureRef.redoable;\n};\nfunction onClick1() {\n  signatureRef.undo();\n  sync();\n}\nfunction onClick2() {\n  signatureRef.redo();\n  sync();\n}\nfunction onPlusEnd() {\n  sync();\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" on:plus-end={onPlusEnd} bind:this={signatureRef}\n  ></plus-signature>\n</plus-center>\n<br />\n<plus-stack gap=\"1rem\">\n  <button disabled={disabled1} on:click={onClick1}>Undo</button>\n  <button disabled={disabled2} on:click={onClick2}>Redo</button>\n</plus-stack>\n"
  },
  {
    "key": "vue/signature/history",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\nimport '@htmlplus/ui/stack.js';\n\nconst signatureRef = ref();\nconst disabled2 = ref(true);\nconst disabled1 = ref(true);\nconst sync = () => {\n  disabled1.value = !signatureRef.value.undoable;\n  disabled2.value = !signatureRef.value.redoable;\n};\nfunction onClick1() {\n  signatureRef.value.undo();\n  sync();\n}\nfunction onClick2() {\n  signatureRef.value.redo();\n  sync();\n}\nfunction onPlusEnd() {\n  sync();\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-signature\n      background-color=\"lightgray\"\n      @plus-end=\"onPlusEnd\"\n      ref=\"signatureRef\"\n    ></plus-signature>\n  </plus-center>\n  <br />\n  <plus-stack gap=\"1rem\">\n    <button @click=\"onClick1\" :disabled=\"disabled1\">Undo</button>\n    <button @click=\"onClick2\" :disabled=\"disabled2\">Redo</button>\n  </plus-stack>\n</div>\n"
  },
  {
    "key": "angular/signature/resizable",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" resizable></plus-signature>\n"
  },
  {
    "key": "javascript/signature/resizable",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" resizable></plus-signature>\n"
  },
  {
    "key": "react/signature/resizable",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return <plus-signature background-color=\"lightgray\" resizable></plus-signature>;\n}\nexport default App;\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n"
  },
  {
    "key": "react-experimental/signature/resizable",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return <plus-signature background-color=\"lightgray\" resizable></plus-signature>;\n}\nexport default App;\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n"
  },
  {
    "key": "svelte/signature/resizable",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" resizable></plus-signature>\n"
  },
  {
    "key": "vue/signature/resizable",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/signature.js';\n",
    "style": "plus-signature {\n  height: 15rem;\n  width: 100%;\n}\n",
    "template": "<plus-signature background-color=\"lightgray\" resizable></plus-signature>\n"
  },
  {
    "key": "angular/signature/save",
    "script": "import { Component, ElementRef, ViewChild } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  @ViewChild('signature')\n  signatureRef!: ElementRef;\n  onClick() {\n    const tab = open('', '_blank');\n    setTimeout(() => {\n      tab.document.write(this.signatureRef.nativeElement.value);\n    }, 250);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" #signature></plus-signature>\n</plus-center>\n<br />\n<plus-center>\n  <button (click)=\"onClick()\">Save</button>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/save",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n$save.addEventListener('click', () => {\n  const tab = open('', '_blank');\n  setTimeout(() => {\n    tab.document.write($signature.value);\n  }, 250);\n});\n",
    "template": "<plus-center>\n  <plus-signature id=\"$signature\" background-color=\"lightgray\"></plus-signature>\n</plus-center>\n<br />\n<plus-center>\n  <button id=\"$save\">Save</button>\n</plus-center>\n"
  },
  {
    "key": "react/signature/save",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  function onClick() {\n    const tab = open('', '_blank');\n    setTimeout(() => {\n      tab.document.write(signatureRef.current.value);\n    }, 250);\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-signature background-color=\"lightgray\" ref={signatureRef}></plus-signature>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onClick={onClick}>Save</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/save",
    "script": "import { useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  function onClick() {\n    const tab = open('', '_blank');\n    setTimeout(() => {\n      tab.document.write(signatureRef.current.value);\n    }, 250);\n  }\n  return (\n    <>\n      <plus-center>\n        <plus-signature background-color=\"lightgray\" ref={signatureRef}></plus-signature>\n      </plus-center>\n      <br />\n      <plus-center>\n        <button onclick={onClick}>Save</button>\n      </plus-center>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/save",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nlet signatureRef;\nfunction onClick() {\n  const tab = open('', '_blank');\n  setTimeout(() => {\n    tab.document.write(signatureRef.value);\n  }, 250);\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" bind:this={signatureRef}></plus-signature>\n</plus-center>\n<br />\n<plus-center>\n  <button on:click={onClick}>Save</button>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/save",
    "script": "import { ref } from 'vue';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nconst signatureRef = ref();\nfunction onClick() {\n  const tab = open('', '_blank');\n  setTimeout(() => {\n    tab.document.write(signatureRef.value.value);\n  }, 250);\n}\n",
    "template": "<div>\n  <plus-center>\n    <plus-signature background-color=\"lightgray\" ref=\"signatureRef\"></plus-signature>\n  </plus-center>\n  <br />\n  <plus-center>\n    <button @click=\"onClick\">Save</button>\n  </plus-center>\n</div>\n"
  },
  {
    "key": "angular/signature/value",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  value = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"150\" viewBox=\"0 0 226 88\"><path style=\"fill:#000000\" d=\"M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z\"/></svg>`;\n}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" [value]=\"value\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/value",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n$signature.value = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"150\" viewBox=\"0 0 226 88\"><path style=\"fill:#000000\" d=\"M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z\"/></svg>`;\n",
    "template": "<plus-center>\n  <plus-signature id=\"$signature\" background-color=\"lightgray\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/value",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  const signatureRef = useRef();\n  useEffect(() => {\n    signatureRef.current.value = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"150\" viewBox=\"0 0 226 88\"><path style=\"fill:#000000\" d=\"M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z\"/></svg>`;\n  }, []);\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" ref={signatureRef}></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/value",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  const value = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"150\" viewBox=\"0 0 226 88\"><path style=\"fill:#000000\" d=\"M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z\"/></svg>`;\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" value={value}></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/value",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nconst value = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"150\" viewBox=\"0 0 226 88\"><path style=\"fill:#000000\" d=\"M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z\"/></svg>`;\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" {value}></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/value",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nconst value = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"150\" viewBox=\"0 0 226 88\"><path style=\"fill:#000000\" d=\"M 4,83.086594 C 4,81.772977 15.091939,66.960016 23.640206,56.857674 42.532443,34.530825 68.146932,12.118673 72.029368,14.51815 c 3.440315,2.126232 -1.113183,13.912455 -10.047144,26.005912 -5.876647,7.954925 -5.721453,8.123513 4.973475,5.402698 2.236381,-0.56894 3.680623,-0.515203 4.093162,0.152299 0.396425,0.641429 2.587372,0.772773 5.794301,0.347358 C 79.679423,46.050174 82,45.988024 82,46.288305 c 0,1.135461 -10.149168,2.702402 -11.811015,1.823515 -1.046179,-0.553283 -4.125471,-0.387845 -8.090899,0.434693 -5.403257,1.120782 -7.124545,2.039695 -11.034349,5.890709 -4.825381,4.752822 -7.425169,5.669244 -8.456748,2.980991 -1.044303,-2.721409 -0.684256,-4.042795 1.845262,-6.77219 C 46.296986,48.655521 47.871389,48 50.80736,48 54.453976,48 54.998764,47.592161 59.105109,41.78814 65.351623,32.959145 67.092458,30.142991 69.698793,24.650703 72.07059,19.652653 72.668124,16 71.113953,16 66.95109,16 36.586105,43.48501 24.713047,58 16.11329,68.51333 10.639446,75.768628 8.3035054,79.75 5.9894028,83.694152 4,85.236576 4,83.086594 Z M 50.381436,52.540607 C 52.008109,50.05799 51.990147,50 49.594482,50 c -3.765344,0 -7.068885,4.192263 -4.962999,6.29815 0.974363,0.974362 3.903848,-0.940029 5.749953,-3.757543 z M 89,64.191172 C 89,62.69565 96.084246,51.562926 101.77474,44.115969 104.87807,40.054751 111.93579,31.990143 117.45858,26.194616 132.00953,10.925064 143,3.3772948 143,8.6539 c 0,2.668281 -6.39335,13.157375 -13.89739,22.800422 -3.83245,4.924877 -6.71178,9.369043 -6.39851,9.875926 0.93039,1.505399 12.43066,0.03129 17.45126,-2.236917 2.56045,-1.156756 5.38992,-1.821319 6.28771,-1.476804 4.68541,1.797963 18.50862,-6.536046 30.42875,-18.345489 8.21472,-8.138439 12.25818,-10.5410425 14.3014,-8.497822 1.16572,1.165721 -0.38218,2.864847 -7.28033,7.991617 -11.73227,8.719528 -14.78799,11.314912 -17.80146,15.119729 -3.76676,4.755926 -3.06513,5.030817 5.40373,2.117105 3.59141,-1.235629 10.80748,-2.376746 18.90655,-2.989798 7.20406,-0.545306 15.43412,-1.511697 18.28903,-2.147535 4.06034,-0.904309 5.85696,-0.880111 8.25,0.111119 3.89379,1.612863 4.02761,3.258078 0.1552,1.908148 -1.98379,-0.691554 -4.15083,-0.676638 -6.83848,0.04707 -2.16393,0.582687 -8.61961,1.318494 -14.34594,1.635128 -11.18553,0.618494 -23.68834,2.709207 -27.09069,4.530086 -7.02814,3.76135 -10.58854,2.531609 -7.28181,-2.515099 0.93005,-1.419433 1.52675,-2.578704 1.32599,-2.576157 -0.20076,0.0025 -3.06501,1.116865 -6.36501,2.476264 -3.3,1.359399 -7.8225,2.482315 -10.05,2.49537 -2.2275,0.01305 -4.4775,0.418421 -5,0.900814 -2.24273,2.07058 -11.86277,4.337718 -16.51089,3.891092 -2.66311,-0.255891 -5.30637,-9.13e-4 -5.8739,0.566619 -0.56753,0.567532 -1.30546,0.758289 -1.63985,0.423904 -0.94143,-0.941435 0.51281,-4.5925 1.96939,-4.944419 2.53526,-0.612533 20.59469,-24.827227 22.04918,-29.564275 1.0729,-3.494294 -0.68772,-2.7528251 -8.62842,3.633771 C 119.63652,24.483462 104.94683,41.012304 95.594834,55.764491 89.916078,64.722369 89,65.892906 89,64.191172 Z M 188.41865,13.25 c 1.11247,-2.681527 -1.8008,-1.020164 -6.743,3.845348 l -5.17565,5.095348 5.70003,-3.845348 c 3.13502,-2.114941 5.9334,-4.407848 6.21862,-5.095348 z\"/></svg>`;\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" :value=\"value\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/signature/width",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" [min-width]=\"1.5\" [max-width]=\"4.5\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "javascript/signature/width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" min-width=\"1.5\" max-width=\"4.5\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "react/signature/width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" min-width={1.5} max-width={4.5}></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/signature/width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-signature background-color=\"lightgray\" min-width={1.5} max-width={4.5}></plus-signature>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/signature/width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" min-width={1.5} max-width={4.5}></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "vue/signature/width",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/signature.js';\n",
    "template": "<plus-center>\n  <plus-signature background-color=\"lightgray\" :min-width=\"1.5\" :max-width=\"4.5\"></plus-signature>\n</plus-center>\n"
  },
  {
    "key": "angular/spinner/color",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".spinner-1 {\n  color: #08dfc8;\n}\n.spinner-2 {\n  color: #ff5449;\n}\n.spinner-3 {\n  color: #5f9ee9;\n}\n.spinner-4 {\n  color: #ffc903;\n}\n.spinner-5 {\n  color: #9073c1;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner class=\"spinner-1\"></plus-spinner>\n  <plus-spinner class=\"spinner-2\"></plus-spinner>\n  <plus-spinner class=\"spinner-3\"></plus-spinner>\n  <plus-spinner class=\"spinner-4\"></plus-spinner>\n  <plus-spinner class=\"spinner-5\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "javascript/spinner/color",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": ".spinner-1 {\n  color: #08dfc8;\n}\n.spinner-2 {\n  color: #ff5449;\n}\n.spinner-3 {\n  color: #5f9ee9;\n}\n.spinner-4 {\n  color: #ffc903;\n}\n.spinner-5 {\n  color: #9073c1;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner class=\"spinner-1\"></plus-spinner>\n  <plus-spinner class=\"spinner-2\"></plus-spinner>\n  <plus-spinner class=\"spinner-3\"></plus-spinner>\n  <plus-spinner class=\"spinner-4\"></plus-spinner>\n  <plus-spinner class=\"spinner-5\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "react/spinner/color",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner class=\"spinner-1\"></plus-spinner>\n      <plus-spinner class=\"spinner-2\"></plus-spinner>\n      <plus-spinner class=\"spinner-3\"></plus-spinner>\n      <plus-spinner class=\"spinner-4\"></plus-spinner>\n      <plus-spinner class=\"spinner-5\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": ".spinner-1 {\n  color: #08dfc8;\n}\n.spinner-2 {\n  color: #ff5449;\n}\n.spinner-3 {\n  color: #5f9ee9;\n}\n.spinner-4 {\n  color: #ffc903;\n}\n.spinner-5 {\n  color: #9073c1;\n}\n"
  },
  {
    "key": "react-experimental/spinner/color",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner className=\"spinner-1\"></plus-spinner>\n      <plus-spinner className=\"spinner-2\"></plus-spinner>\n      <plus-spinner className=\"spinner-3\"></plus-spinner>\n      <plus-spinner className=\"spinner-4\"></plus-spinner>\n      <plus-spinner className=\"spinner-5\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": ".spinner-1 {\n  color: #08dfc8;\n}\n.spinner-2 {\n  color: #ff5449;\n}\n.spinner-3 {\n  color: #5f9ee9;\n}\n.spinner-4 {\n  color: #ffc903;\n}\n.spinner-5 {\n  color: #9073c1;\n}\n"
  },
  {
    "key": "svelte/spinner/color",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": ".spinner-1 {\n  color: #08dfc8;\n}\n.spinner-2 {\n  color: #ff5449;\n}\n.spinner-3 {\n  color: #5f9ee9;\n}\n.spinner-4 {\n  color: #ffc903;\n}\n.spinner-5 {\n  color: #9073c1;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner class=\"spinner-1\"></plus-spinner>\n  <plus-spinner class=\"spinner-2\"></plus-spinner>\n  <plus-spinner class=\"spinner-3\"></plus-spinner>\n  <plus-spinner class=\"spinner-4\"></plus-spinner>\n  <plus-spinner class=\"spinner-5\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "vue/spinner/color",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": ".spinner-1 {\n  color: #08dfc8;\n}\n.spinner-2 {\n  color: #ff5449;\n}\n.spinner-3 {\n  color: #5f9ee9;\n}\n.spinner-4 {\n  color: #ffc903;\n}\n.spinner-5 {\n  color: #9073c1;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner class=\"spinner-1\"></plus-spinner>\n  <plus-spinner class=\"spinner-2\"></plus-spinner>\n  <plus-spinner class=\"spinner-3\"></plus-spinner>\n  <plus-spinner class=\"spinner-4\"></plus-spinner>\n  <plus-spinner class=\"spinner-5\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "angular/spinner/custom-size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-spinner[size='sm'] {\n  width: 24px;\n  height: 24px;\n}\nplus-spinner[size='md'] {\n  width: 48px;\n  height: 48px;\n}\nplus-spinner[size='lg'] {\n  width: 72px;\n  height: 72px;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "javascript/spinner/custom-size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-spinner[size='sm'] {\n  width: 24px;\n  height: 24px;\n}\nplus-spinner[size='md'] {\n  width: 48px;\n  height: 48px;\n}\nplus-spinner[size='lg'] {\n  width: 72px;\n  height: 72px;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "react/spinner/custom-size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner size=\"sm\"></plus-spinner>\n      <plus-spinner size=\"md\"></plus-spinner>\n      <plus-spinner size=\"lg\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-spinner[size='sm'] {\n  width: 24px;\n  height: 24px;\n}\nplus-spinner[size='md'] {\n  width: 48px;\n  height: 48px;\n}\nplus-spinner[size='lg'] {\n  width: 72px;\n  height: 72px;\n}\n"
  },
  {
    "key": "react-experimental/spinner/custom-size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner size=\"sm\"></plus-spinner>\n      <plus-spinner size=\"md\"></plus-spinner>\n      <plus-spinner size=\"lg\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "plus-spinner[size='sm'] {\n  width: 24px;\n  height: 24px;\n}\nplus-spinner[size='md'] {\n  width: 48px;\n  height: 48px;\n}\nplus-spinner[size='lg'] {\n  width: 72px;\n  height: 72px;\n}\n"
  },
  {
    "key": "svelte/spinner/custom-size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-spinner[size='sm'] {\n  width: 24px;\n  height: 24px;\n}\nplus-spinner[size='md'] {\n  width: 48px;\n  height: 48px;\n}\nplus-spinner[size='lg'] {\n  width: 72px;\n  height: 72px;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "vue/spinner/custom-size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "style": "plus-spinner[size='sm'] {\n  width: 24px;\n  height: 24px;\n}\nplus-spinner[size='md'] {\n  width: 48px;\n  height: 48px;\n}\nplus-spinner[size='lg'] {\n  width: 72px;\n  height: 72px;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "angular/spinner/customized",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-spinner {\n  color: purple;\n  width: 5rem;\n  height: 5rem;\n  font-size: 0.8rem;\n}\n",
    "template": "<plus-center>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "javascript/spinner/customized",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n",
    "style": "plus-spinner {\n  color: purple;\n  width: 5rem;\n  height: 5rem;\n  font-size: 0.8rem;\n}\n",
    "template": "<plus-center>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "react/spinner/customized",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-spinner type=\"dual-ring\"></plus-spinner>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-spinner {\n  color: purple;\n  width: 5rem;\n  height: 5rem;\n  font-size: 0.8rem;\n}\n"
  },
  {
    "key": "react-experimental/spinner/customized",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-spinner type=\"dual-ring\"></plus-spinner>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-spinner {\n  color: purple;\n  width: 5rem;\n  height: 5rem;\n  font-size: 0.8rem;\n}\n"
  },
  {
    "key": "svelte/spinner/customized",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n",
    "style": "plus-spinner {\n  color: purple;\n  width: 5rem;\n  height: 5rem;\n  font-size: 0.8rem;\n}\n",
    "template": "<plus-center>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "vue/spinner/customized",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n",
    "style": "plus-spinner {\n  color: purple;\n  width: 5rem;\n  height: 5rem;\n  font-size: 0.8rem;\n}\n",
    "template": "<plus-center>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "angular/spinner/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-spinner></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "javascript/spinner/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n",
    "template": "<plus-center>\n  <plus-spinner></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "react/spinner/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-spinner></plus-spinner>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/spinner/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-spinner></plus-spinner>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/spinner/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n",
    "template": "<plus-center>\n  <plus-spinner></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "vue/spinner/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/spinner.js';\n",
    "template": "<plus-center>\n  <plus-spinner></plus-spinner>\n</plus-center>\n"
  },
  {
    "key": "angular/spinner/size",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "javascript/spinner/size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "react/spinner/size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner size=\"sm\"></plus-spinner>\n      <plus-spinner size=\"md\"></plus-spinner>\n      <plus-spinner size=\"lg\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/spinner/size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner size=\"sm\"></plus-spinner>\n      <plus-spinner size=\"md\"></plus-spinner>\n      <plus-spinner size=\"lg\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/spinner/size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "vue/spinner/size",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner size=\"sm\"></plus-spinner>\n  <plus-spinner size=\"md\"></plus-spinner>\n  <plus-spinner size=\"lg\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "angular/spinner/type",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner type=\"default\"></plus-spinner>\n  <plus-spinner type=\"double-bounce\"></plus-spinner>\n  <plus-spinner type=\"ring\"></plus-spinner>\n  <plus-spinner type=\"ripple\"></plus-spinner>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n  <plus-spinner type=\"square\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "javascript/spinner/type",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner type=\"default\"></plus-spinner>\n  <plus-spinner type=\"double-bounce\"></plus-spinner>\n  <plus-spinner type=\"ring\"></plus-spinner>\n  <plus-spinner type=\"ripple\"></plus-spinner>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n  <plus-spinner type=\"square\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "react/spinner/type",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner type=\"default\"></plus-spinner>\n      <plus-spinner type=\"double-bounce\"></plus-spinner>\n      <plus-spinner type=\"ring\"></plus-spinner>\n      <plus-spinner type=\"ripple\"></plus-spinner>\n      <plus-spinner type=\"dual-ring\"></plus-spinner>\n      <plus-spinner type=\"square\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/spinner/type",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-spinner type=\"default\"></plus-spinner>\n      <plus-spinner type=\"double-bounce\"></plus-spinner>\n      <plus-spinner type=\"ring\"></plus-spinner>\n      <plus-spinner type=\"ripple\"></plus-spinner>\n      <plus-spinner type=\"dual-ring\"></plus-spinner>\n      <plus-spinner type=\"square\"></plus-spinner>\n    </plus-stack>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/spinner/type",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner type=\"default\"></plus-spinner>\n  <plus-spinner type=\"double-bounce\"></plus-spinner>\n  <plus-spinner type=\"ring\"></plus-spinner>\n  <plus-spinner type=\"ripple\"></plus-spinner>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n  <plus-spinner type=\"square\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "vue/spinner/type",
    "script": "import '@htmlplus/ui/spinner.js';\nimport '@htmlplus/ui/stack.js';\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-spinner type=\"default\"></plus-spinner>\n  <plus-spinner type=\"double-bounce\"></plus-spinner>\n  <plus-spinner type=\"ring\"></plus-spinner>\n  <plus-spinner type=\"ripple\"></plus-spinner>\n  <plus-spinner type=\"dual-ring\"></plus-spinner>\n  <plus-spinner type=\"square\"></plus-spinner>\n</plus-stack>\n"
  },
  {
    "key": "angular/sticky/contacts",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\np {\n  color: lightgray;\n  font-size: 10rem;\n  line-height: 2;\n  text-align: center;\n}\nplus-sticky {\n  background-color: lightgray;\n  padding: 0.5rem 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>A</plus-sticky>\n  <p>A</p>\n  <plus-sticky>B</plus-sticky>\n  <p>B</p>\n  <plus-sticky>C</plus-sticky>\n  <p>C</p>\n  <plus-sticky>D</plus-sticky>\n  <p>D</p>\n  <plus-sticky>E</plus-sticky>\n  <p>E</p>\n  <plus-sticky>F</plus-sticky>\n  <p>F</p>\n</div>\n"
  },
  {
    "key": "javascript/sticky/contacts",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\np {\n  color: lightgray;\n  font-size: 10rem;\n  line-height: 2;\n  text-align: center;\n}\nplus-sticky {\n  background-color: lightgray;\n  padding: 0.5rem 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>A</plus-sticky>\n  <p>A</p>\n  <plus-sticky>B</plus-sticky>\n  <p>B</p>\n  <plus-sticky>C</plus-sticky>\n  <p>C</p>\n  <plus-sticky>D</plus-sticky>\n  <p>D</p>\n  <plus-sticky>E</plus-sticky>\n  <p>E</p>\n  <plus-sticky>F</plus-sticky>\n  <p>F</p>\n</div>\n"
  },
  {
    "key": "react/sticky/contacts",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-sticky>A</plus-sticky>\n      <p>A</p>\n      <plus-sticky>B</plus-sticky>\n      <p>B</p>\n      <plus-sticky>C</plus-sticky>\n      <p>C</p>\n      <plus-sticky>D</plus-sticky>\n      <p>D</p>\n      <plus-sticky>E</plus-sticky>\n      <p>E</p>\n      <plus-sticky>F</plus-sticky>\n      <p>F</p>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\np {\n  color: lightgray;\n  font-size: 10rem;\n  line-height: 2;\n  text-align: center;\n}\nplus-sticky {\n  background-color: lightgray;\n  padding: 0.5rem 1rem;\n}\n"
  },
  {
    "key": "react-experimental/sticky/contacts",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-sticky>A</plus-sticky>\n      <p>A</p>\n      <plus-sticky>B</plus-sticky>\n      <p>B</p>\n      <plus-sticky>C</plus-sticky>\n      <p>C</p>\n      <plus-sticky>D</plus-sticky>\n      <p>D</p>\n      <plus-sticky>E</plus-sticky>\n      <p>E</p>\n      <plus-sticky>F</plus-sticky>\n      <p>F</p>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\np {\n  color: lightgray;\n  font-size: 10rem;\n  line-height: 2;\n  text-align: center;\n}\nplus-sticky {\n  background-color: lightgray;\n  padding: 0.5rem 1rem;\n}\n"
  },
  {
    "key": "svelte/sticky/contacts",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\np {\n  color: lightgray;\n  font-size: 10rem;\n  line-height: 2;\n  text-align: center;\n}\nplus-sticky {\n  background-color: lightgray;\n  padding: 0.5rem 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>A</plus-sticky>\n  <p>A</p>\n  <plus-sticky>B</plus-sticky>\n  <p>B</p>\n  <plus-sticky>C</plus-sticky>\n  <p>C</p>\n  <plus-sticky>D</plus-sticky>\n  <p>D</p>\n  <plus-sticky>E</plus-sticky>\n  <p>E</p>\n  <plus-sticky>F</plus-sticky>\n  <p>F</p>\n</div>\n"
  },
  {
    "key": "vue/sticky/contacts",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\np {\n  color: lightgray;\n  font-size: 10rem;\n  line-height: 2;\n  text-align: center;\n}\nplus-sticky {\n  background-color: lightgray;\n  padding: 0.5rem 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <plus-sticky>A</plus-sticky>\n  <p>A</p>\n  <plus-sticky>B</plus-sticky>\n  <p>B</p>\n  <plus-sticky>C</plus-sticky>\n  <p>C</p>\n  <plus-sticky>D</plus-sticky>\n  <p>D</p>\n  <plus-sticky>E</plus-sticky>\n  <p>E</p>\n  <plus-sticky>F</plus-sticky>\n  <p>F</p>\n</div>\n"
  },
  {
    "key": "angular/sticky/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" [arguments]='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "javascript/sticky/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "react/sticky/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [20, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n      <plus-sticky>\n        <plus-faker></plus-faker>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n"
  },
  {
    "key": "react-experimental/sticky/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n      <plus-sticky>\n        <plus-faker></plus-faker>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n"
  },
  {
    "key": "svelte/sticky/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n</div>\n"
  },
  {
    "key": "vue/sticky/default",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" :arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "angular/sticky/sidebar",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\naside,\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\n",
    "template": "<div class=\"container\">\n  <header>Header</header>\n  <plus-grid>\n    <plus-grid-item xs=\"7\">\n      <plus-faker api=\"lorem.paragraphs\" [arguments]='[10, \"\\n\\n\"]'></plus-faker>\n    </plus-grid-item>\n    <plus-grid-item xs=\"5\">\n      <br />\n      <plus-sticky>\n        <aside>A Sticky Sidebar</aside>\n      </plus-sticky>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "javascript/sticky/sidebar",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\naside,\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\n",
    "template": "<div class=\"container\">\n  <header>Header</header>\n  <plus-grid>\n    <plus-grid-item xs=\"7\">\n      <plus-faker api=\"lorem.paragraphs\" arguments='[10, \"\\n\\n\"]'></plus-faker>\n    </plus-grid-item>\n    <plus-grid-item xs=\"5\">\n      <br />\n      <plus-sticky>\n        <aside>A Sticky Sidebar</aside>\n      </plus-sticky>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "react/sticky/sidebar",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [10, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <header>Header</header>\n      <plus-grid>\n        <plus-grid-item xs=\"7\">\n          <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n        </plus-grid-item>\n        <plus-grid-item xs=\"5\">\n          <br />\n          <plus-sticky>\n            <aside>A Sticky Sidebar</aside>\n          </plus-sticky>\n        </plus-grid-item>\n      </plus-grid>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\naside,\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\n"
  },
  {
    "key": "react-experimental/sticky/sidebar",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <header>Header</header>\n      <plus-grid>\n        <plus-grid-item xs=\"7\">\n          <plus-faker api=\"lorem.paragraphs\" arguments={[10, '\\n\\n']}></plus-faker>\n        </plus-grid-item>\n        <plus-grid-item xs=\"5\">\n          <br />\n          <plus-sticky>\n            <aside>A Sticky Sidebar</aside>\n          </plus-sticky>\n        </plus-grid-item>\n      </plus-grid>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\naside,\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\n"
  },
  {
    "key": "svelte/sticky/sidebar",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\naside,\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\n",
    "template": "<div class=\"container\">\n  <header>Header</header>\n  <plus-grid>\n    <plus-grid-item xs=\"7\">\n      <plus-faker api=\"lorem.paragraphs\" arguments={[10, '\\n\\n']}></plus-faker>\n    </plus-grid-item>\n    <plus-grid-item xs=\"5\">\n      <br />\n      <plus-sticky>\n        <aside>A Sticky Sidebar</aside>\n      </plus-sticky>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "vue/sticky/sidebar",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/grid-item.js';\nimport '@htmlplus/ui/grid.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\naside,\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\n",
    "template": "<div class=\"container\">\n  <header>Header</header>\n  <plus-grid>\n    <plus-grid-item xs=\"7\">\n      <plus-faker api=\"lorem.paragraphs\" :arguments='[10, \"\\n\\n\"]'></plus-faker>\n    </plus-grid-item>\n    <plus-grid-item xs=\"5\">\n      <br />\n      <plus-sticky>\n        <aside>A Sticky Sidebar</aside>\n      </plus-sticky>\n    </plus-grid-item>\n  </plus-grid>\n</div>\n"
  },
  {
    "key": "angular/sticky/slots",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] header {\n  border-radius: 4px;\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <br />\n  <plus-sticky watcher>\n    <header slot=\"normal\">Normal Header</header>\n    <header slot=\"stick\">Stick Header</header>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" [arguments]='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "javascript/sticky/slots",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] header {\n  border-radius: 4px;\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <br />\n  <plus-sticky watcher>\n    <header slot=\"normal\">Normal Header</header>\n    <header slot=\"stick\">Stick Header</header>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "react/sticky/slots",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [20, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <br />\n      <plus-sticky watcher>\n        <header slot=\"normal\">Normal Header</header>\n        <header slot=\"stick\">Stick Header</header>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] header {\n  border-radius: 4px;\n  margin: 1rem;\n}\n"
  },
  {
    "key": "react-experimental/sticky/slots",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <br />\n      <plus-sticky watcher>\n        <header slot=\"normal\">Normal Header</header>\n        <header slot=\"stick\">Stick Header</header>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] header {\n  border-radius: 4px;\n  margin: 1rem;\n}\n"
  },
  {
    "key": "svelte/sticky/slots",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] header {\n  border-radius: 4px;\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <br />\n  <plus-sticky watcher>\n    <header slot=\"normal\">Normal Header</header>\n    <header slot=\"stick\">Stick Header</header>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n</div>\n"
  },
  {
    "key": "vue/sticky/slots",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nheader {\n  background: lightgray;\n  text-align: center;\n  padding: 1rem;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] header {\n  border-radius: 4px;\n  margin: 1rem;\n}\n",
    "template": "<div class=\"container\">\n  <br />\n  <plus-sticky watcher>\n    <header slot=\"normal\">Normal Header</header>\n    <header slot=\"stick\">Stick Header</header>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" :arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "angular/sticky/state-attribute",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] {\n  background-color: gold;\n}\nplus-sticky[state='stick'] {\n  background-color: greenyellow;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky watcher>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" [arguments]='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "javascript/sticky/state-attribute",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] {\n  background-color: gold;\n}\nplus-sticky[state='stick'] {\n  background-color: greenyellow;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky watcher>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "react/sticky/state-attribute",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [20, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n      <plus-sticky watcher>\n        <plus-faker></plus-faker>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] {\n  background-color: gold;\n}\nplus-sticky[state='stick'] {\n  background-color: greenyellow;\n}\n"
  },
  {
    "key": "react-experimental/sticky/state-attribute",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n      <plus-sticky watcher>\n        <plus-faker></plus-faker>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] {\n  background-color: gold;\n}\nplus-sticky[state='stick'] {\n  background-color: greenyellow;\n}\n"
  },
  {
    "key": "svelte/sticky/state-attribute",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] {\n  background-color: gold;\n}\nplus-sticky[state='stick'] {\n  background-color: greenyellow;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky watcher>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n</div>\n"
  },
  {
    "key": "vue/sticky/state-attribute",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky[state='normal'] {\n  background-color: gold;\n}\nplus-sticky[state='stick'] {\n  background-color: greenyellow;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky watcher>\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" :arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "angular/sticky/top",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky top=\"20px\">\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" [arguments]='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "javascript/sticky/top",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky top=\"20px\">\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "react/sticky/top",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  const plusFakerRef = useRef();\n  useEffect(() => {\n    plusFakerRef.current.arguments = [20, '\\n\\n'];\n  }, []);\n  return (\n    <div className=\"container\">\n      <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n      <plus-sticky top=\"20px\">\n        <plus-faker></plus-faker>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" ref={plusFakerRef}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n"
  },
  {
    "key": "react-experimental/sticky/top",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n      <plus-sticky top=\"20px\">\n        <plus-faker></plus-faker>\n      </plus-sticky>\n      <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n    </div>\n  );\n}\nexport default App;\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n"
  },
  {
    "key": "svelte/sticky/top",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky top=\"20px\">\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" arguments={[20, '\\n\\n']}></plus-faker>\n</div>\n"
  },
  {
    "key": "vue/sticky/top",
    "settings": {
      "dock": true,
      "isolate": false,
      "rtl": false
    },
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/sticky.js';\n",
    "style": ".container {\n  height: 20rem;\n  overflow: auto;\n}\nplus-faker {\n  display: block;\n  padding: 1rem;\n  text-align: justify;\n}\nplus-sticky {\n  background-color: gold;\n}\n",
    "template": "<div class=\"container\">\n  <plus-faker api=\"lorem.paragraphs\"></plus-faker>\n  <plus-sticky top=\"20px\">\n    <plus-faker></plus-faker>\n  </plus-sticky>\n  <plus-faker api=\"lorem.paragraphs\" :arguments='[20, \"\\n\\n\"]'></plus-faker>\n</div>\n"
  },
  {
    "key": "angular/switch/checked",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "javascript/switch/checked",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "react/switch/checked",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch checked></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/switch/checked",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch checked></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/switch/checked",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "vue/switch/checked",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "angular/switch/customized",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/stack.js';\nimport '@htmlplus/ui/switch.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "/*\n      * switch-1\n      */\n\n.switch-1[aria-checked='false']::part(root) {\n  background: #28292c;\n}\n\n.switch-1[aria-checked='false']::part(handle) {\n  background: #28292c;\n  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(root) {\n  background: #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(handle) {\n  background: #28292c;\n  box-shadow: none;\n}\n\n/*\n      * switch-2\n      */\n\n.switch-2 {\n  border-radius: 2px;\n  transition: 0.6s ease all;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.switch-2::part(root) {\n  background: #ebf7fc;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(root) {\n  background: #fcebeb;\n}\n\n.switch-2::part(handle) {\n  background: #03a9f4;\n  transform: translateY(-50%) rotateY(-000deg);\n  transform-origin: 0% 50%;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {\n  background-color: #f44336;\n  transform: translateY(-50%) rotateY(-180deg);\n}\n\n.switch-2::part(root) {\n  perspective: 70px;\n}\n\n.switch-2::part(slot) {\n  opacity: 1;\n  color: #4e4e4e;\n  font-size: 0.625em;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n}\n\n.switch-2::part(on)::before {\n  content: 'YES';\n  left: 0.25em;\n}\n\n.switch-2::part(off)::before {\n  content: 'NO';\n  right: 0.25em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-switch class=\"switch-1\"></plus-switch>\n  <plus-switch class=\"switch-2\"></plus-switch>\n</plus-stack>\n"
  },
  {
    "key": "javascript/switch/customized",
    "script": "import '@htmlplus/ui/stack.js';\nimport '@htmlplus/ui/switch.js';\n",
    "style": "/*\n      * switch-1\n      */\n\n.switch-1[aria-checked='false']::part(root) {\n  background: #28292c;\n}\n\n.switch-1[aria-checked='false']::part(handle) {\n  background: #28292c;\n  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(root) {\n  background: #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(handle) {\n  background: #28292c;\n  box-shadow: none;\n}\n\n/*\n      * switch-2\n      */\n\n.switch-2 {\n  border-radius: 2px;\n  transition: 0.6s ease all;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.switch-2::part(root) {\n  background: #ebf7fc;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(root) {\n  background: #fcebeb;\n}\n\n.switch-2::part(handle) {\n  background: #03a9f4;\n  transform: translateY(-50%) rotateY(-000deg);\n  transform-origin: 0% 50%;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {\n  background-color: #f44336;\n  transform: translateY(-50%) rotateY(-180deg);\n}\n\n.switch-2::part(root) {\n  perspective: 70px;\n}\n\n.switch-2::part(slot) {\n  opacity: 1;\n  color: #4e4e4e;\n  font-size: 0.625em;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n}\n\n.switch-2::part(on)::before {\n  content: 'YES';\n  left: 0.25em;\n}\n\n.switch-2::part(off)::before {\n  content: 'NO';\n  right: 0.25em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-switch class=\"switch-1\"></plus-switch>\n  <plus-switch class=\"switch-2\"></plus-switch>\n</plus-stack>\n"
  },
  {
    "key": "react/switch/customized",
    "script": "import '@htmlplus/ui/stack.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-switch class=\"switch-1\"></plus-switch>\n      <plus-switch class=\"switch-2\"></plus-switch>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "/*\n      * switch-1\n      */\n\n.switch-1[aria-checked='false']::part(root) {\n  background: #28292c;\n}\n\n.switch-1[aria-checked='false']::part(handle) {\n  background: #28292c;\n  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(root) {\n  background: #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(handle) {\n  background: #28292c;\n  box-shadow: none;\n}\n\n/*\n      * switch-2\n      */\n\n.switch-2 {\n  border-radius: 2px;\n  transition: 0.6s ease all;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.switch-2::part(root) {\n  background: #ebf7fc;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(root) {\n  background: #fcebeb;\n}\n\n.switch-2::part(handle) {\n  background: #03a9f4;\n  transform: translateY(-50%) rotateY(-000deg);\n  transform-origin: 0% 50%;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {\n  background-color: #f44336;\n  transform: translateY(-50%) rotateY(-180deg);\n}\n\n.switch-2::part(root) {\n  perspective: 70px;\n}\n\n.switch-2::part(slot) {\n  opacity: 1;\n  color: #4e4e4e;\n  font-size: 0.625em;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n}\n\n.switch-2::part(on)::before {\n  content: 'YES';\n  left: 0.25em;\n}\n\n.switch-2::part(off)::before {\n  content: 'NO';\n  right: 0.25em;\n}\n"
  },
  {
    "key": "react-experimental/switch/customized",
    "script": "import '@htmlplus/ui/stack.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-stack gap=\"2rem\">\n      <plus-switch className=\"switch-1\"></plus-switch>\n      <plus-switch className=\"switch-2\"></plus-switch>\n    </plus-stack>\n  );\n}\nexport default App;\n",
    "style": "/*\n      * switch-1\n      */\n\n.switch-1[aria-checked='false']::part(root) {\n  background: #28292c;\n}\n\n.switch-1[aria-checked='false']::part(handle) {\n  background: #28292c;\n  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(root) {\n  background: #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(handle) {\n  background: #28292c;\n  box-shadow: none;\n}\n\n/*\n      * switch-2\n      */\n\n.switch-2 {\n  border-radius: 2px;\n  transition: 0.6s ease all;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.switch-2::part(root) {\n  background: #ebf7fc;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(root) {\n  background: #fcebeb;\n}\n\n.switch-2::part(handle) {\n  background: #03a9f4;\n  transform: translateY(-50%) rotateY(-000deg);\n  transform-origin: 0% 50%;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {\n  background-color: #f44336;\n  transform: translateY(-50%) rotateY(-180deg);\n}\n\n.switch-2::part(root) {\n  perspective: 70px;\n}\n\n.switch-2::part(slot) {\n  opacity: 1;\n  color: #4e4e4e;\n  font-size: 0.625em;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n}\n\n.switch-2::part(on)::before {\n  content: 'YES';\n  left: 0.25em;\n}\n\n.switch-2::part(off)::before {\n  content: 'NO';\n  right: 0.25em;\n}\n"
  },
  {
    "key": "svelte/switch/customized",
    "script": "import '@htmlplus/ui/stack.js';\nimport '@htmlplus/ui/switch.js';\n",
    "style": "/*\n      * switch-1\n      */\n\n.switch-1[aria-checked='false']::part(root) {\n  background: #28292c;\n}\n\n.switch-1[aria-checked='false']::part(handle) {\n  background: #28292c;\n  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(root) {\n  background: #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(handle) {\n  background: #28292c;\n  box-shadow: none;\n}\n\n/*\n      * switch-2\n      */\n\n.switch-2 {\n  border-radius: 2px;\n  transition: 0.6s ease all;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.switch-2::part(root) {\n  background: #ebf7fc;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(root) {\n  background: #fcebeb;\n}\n\n.switch-2::part(handle) {\n  background: #03a9f4;\n  transform: translateY(-50%) rotateY(-000deg);\n  transform-origin: 0% 50%;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {\n  background-color: #f44336;\n  transform: translateY(-50%) rotateY(-180deg);\n}\n\n.switch-2::part(root) {\n  perspective: 70px;\n}\n\n.switch-2::part(slot) {\n  opacity: 1;\n  color: #4e4e4e;\n  font-size: 0.625em;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n}\n\n.switch-2::part(on)::before {\n  content: 'YES';\n  left: 0.25em;\n}\n\n.switch-2::part(off)::before {\n  content: 'NO';\n  right: 0.25em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-switch class=\"switch-1\"></plus-switch>\n  <plus-switch class=\"switch-2\"></plus-switch>\n</plus-stack>\n"
  },
  {
    "key": "vue/switch/customized",
    "script": "import '@htmlplus/ui/stack.js';\nimport '@htmlplus/ui/switch.js';\n",
    "style": "/*\n      * switch-1\n      */\n\n.switch-1[aria-checked='false']::part(root) {\n  background: #28292c;\n}\n\n.switch-1[aria-checked='false']::part(handle) {\n  background: #28292c;\n  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(root) {\n  background: #d8dbe0;\n}\n\n.switch-1[aria-checked='true']::part(handle) {\n  background: #28292c;\n  box-shadow: none;\n}\n\n/*\n      * switch-2\n      */\n\n.switch-2 {\n  border-radius: 2px;\n  transition: 0.6s ease all;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.switch-2::part(root) {\n  background: #ebf7fc;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(root) {\n  background: #fcebeb;\n}\n\n.switch-2::part(handle) {\n  background: #03a9f4;\n  transform: translateY(-50%) rotateY(-000deg);\n  transform-origin: 0% 50%;\n}\n\n.switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {\n  background-color: #f44336;\n  transform: translateY(-50%) rotateY(-180deg);\n}\n\n.switch-2::part(root) {\n  perspective: 70px;\n}\n\n.switch-2::part(slot) {\n  opacity: 1;\n  color: #4e4e4e;\n  font-size: 0.625em;\n  font-weight: bold;\n  text-align: center;\n  line-height: 1;\n}\n\n.switch-2::part(on)::before {\n  content: 'YES';\n  left: 0.25em;\n}\n\n.switch-2::part(off)::before {\n  content: 'NO';\n  right: 0.25em;\n}\n",
    "template": "<plus-stack gap=\"2rem\">\n  <plus-switch class=\"switch-1\"></plus-switch>\n  <plus-switch class=\"switch-2\"></plus-switch>\n</plus-stack>\n"
  },
  {
    "key": "angular/switch/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-switch></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "javascript/switch/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "react/switch/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/switch/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/switch/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "vue/switch/default",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "angular/switch/disabled",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-center>\n  <plus-switch disabled></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "javascript/switch/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch disabled></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "react/switch/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch disabled></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/switch/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch disabled></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/switch/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch disabled></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "vue/switch/disabled",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "template": "<plus-center>\n  <plus-switch disabled></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "angular/switch/event",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  onPlusChange(event) {\n    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);\n  }\n}\n",
    "template": "<plus-center>\n  <plus-switch (plus-change)=\"onPlusChange($event)\"></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "javascript/switch/event",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\n$switch.addEventListener('plus-change', (event) => {\n  alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);\n});\n",
    "template": "<plus-center>\n  <plus-switch id=\"$switch\"></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "react/switch/event",
    "script": "import { useEffect, useRef } from 'react';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  const switchRef = useRef();\n  useEffect(() => {\n    if (!switchRef.current) return;\n    function onPlusChange(event) {\n      alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);\n    }\n    switchRef.current.addEventListener('plus-change', onPlusChange);\n    return () => {\n      if (!switchRef.current) return;\n      switchRef.current.removeEventListener('plus-change', onPlusChange);\n    };\n  });\n  return (\n    <plus-center>\n      <plus-switch ref={switchRef}></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/switch/event",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  function onPlusChange(event) {\n    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);\n  }\n  return (\n    <plus-center>\n      <plus-switch onplus-change={onPlusChange}></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/switch/event",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction onPlusChange(event) {\n  alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);\n}\n",
    "template": "<plus-center>\n  <plus-switch on:plus-change={onPlusChange}></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "vue/switch/event",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction onPlusChange(event) {\n  alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);\n}\n",
    "template": "<plus-center>\n  <plus-switch @plus-change=\"onPlusChange\"></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "angular/switch/three-dimensional",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "style": "plus-switch {\n  --width: 10rem;\n  --height: 5rem;\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  overflow: visible;\n  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));\n  perspective: 32em;\n  border-radius: var(--height);\n}\n\nplus-switch::part(root) {\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  background: transparent;\n  border: solid calc(0.125 * var(--height)) #f0f0f0;\n  box-shadow:\n    0.5rem 0.875rem 0 -0.25rem #e0e0e0,\n    0.625rem 0.625rem 0 -0.25rem #e0e0e0,\n    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),\n    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),\n    inset 0.75rem 0.75rem #dfdfdf,\n    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),\n    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);\n  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);\n  transform-style: preserve-3d;\n}\n\nplus-switch::part(handle) {\n  width: var(--height);\n  height: var(--height);\n  background:\n    radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65% 50% no-repeat,\n    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%) 50%/200%;\n  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg) rotatex(-90deg)\n    translatey(-75%) rotate(45deg);\n  filter: Grayscale(var(--grayscale));\n}\n\nplus-switch[aria-checked='false'] {\n  --grayscale: 1;\n  --translate: calc(100% + var(--width) * -0.75);\n}\n\nplus-switch[aria-checked='true'] {\n  --grayscale: 0;\n  --translate: calc(100% + var(--width) * -0.15);\n}\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "javascript/switch/three-dimensional",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "style": "plus-switch {\n  --width: 10rem;\n  --height: 5rem;\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  overflow: visible;\n  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));\n  perspective: 32em;\n  border-radius: var(--height);\n}\n\nplus-switch::part(root) {\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  background: transparent;\n  border: solid calc(0.125 * var(--height)) #f0f0f0;\n  box-shadow:\n    0.5rem 0.875rem 0 -0.25rem #e0e0e0,\n    0.625rem 0.625rem 0 -0.25rem #e0e0e0,\n    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),\n    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),\n    inset 0.75rem 0.75rem #dfdfdf,\n    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),\n    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);\n  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);\n  transform-style: preserve-3d;\n}\n\nplus-switch::part(handle) {\n  width: var(--height);\n  height: var(--height);\n  background:\n    radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65% 50% no-repeat,\n    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%) 50%/200%;\n  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg) rotatex(-90deg)\n    translatey(-75%) rotate(45deg);\n  filter: Grayscale(var(--grayscale));\n}\n\nplus-switch[aria-checked='false'] {\n  --grayscale: 1;\n  --translate: calc(100% + var(--width) * -0.75);\n}\n\nplus-switch[aria-checked='true'] {\n  --grayscale: 0;\n  --translate: calc(100% + var(--width) * -0.15);\n}\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "react/switch/three-dimensional",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch checked></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-switch {\n  --width: 10rem;\n  --height: 5rem;\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  overflow: visible;\n  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));\n  perspective: 32em;\n  border-radius: var(--height);\n}\n\nplus-switch::part(root) {\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  background: transparent;\n  border: solid calc(0.125 * var(--height)) #f0f0f0;\n  box-shadow:\n    0.5rem 0.875rem 0 -0.25rem #e0e0e0,\n    0.625rem 0.625rem 0 -0.25rem #e0e0e0,\n    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),\n    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),\n    inset 0.75rem 0.75rem #dfdfdf,\n    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),\n    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);\n  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);\n  transform-style: preserve-3d;\n}\n\nplus-switch::part(handle) {\n  width: var(--height);\n  height: var(--height);\n  background:\n    radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65% 50% no-repeat,\n    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%) 50%/200%;\n  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg) rotatex(-90deg)\n    translatey(-75%) rotate(45deg);\n  filter: Grayscale(var(--grayscale));\n}\n\nplus-switch[aria-checked='false'] {\n  --grayscale: 1;\n  --translate: calc(100% + var(--width) * -0.75);\n}\n\nplus-switch[aria-checked='true'] {\n  --grayscale: 0;\n  --translate: calc(100% + var(--width) * -0.15);\n}\n"
  },
  {
    "key": "react-experimental/switch/three-dimensional",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n\nfunction App() {\n  return (\n    <plus-center>\n      <plus-switch checked></plus-switch>\n    </plus-center>\n  );\n}\nexport default App;\n",
    "style": "plus-switch {\n  --width: 10rem;\n  --height: 5rem;\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  overflow: visible;\n  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));\n  perspective: 32em;\n  border-radius: var(--height);\n}\n\nplus-switch::part(root) {\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  background: transparent;\n  border: solid calc(0.125 * var(--height)) #f0f0f0;\n  box-shadow:\n    0.5rem 0.875rem 0 -0.25rem #e0e0e0,\n    0.625rem 0.625rem 0 -0.25rem #e0e0e0,\n    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),\n    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),\n    inset 0.75rem 0.75rem #dfdfdf,\n    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),\n    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);\n  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);\n  transform-style: preserve-3d;\n}\n\nplus-switch::part(handle) {\n  width: var(--height);\n  height: var(--height);\n  background:\n    radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65% 50% no-repeat,\n    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%) 50%/200%;\n  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg) rotatex(-90deg)\n    translatey(-75%) rotate(45deg);\n  filter: Grayscale(var(--grayscale));\n}\n\nplus-switch[aria-checked='false'] {\n  --grayscale: 1;\n  --translate: calc(100% + var(--width) * -0.75);\n}\n\nplus-switch[aria-checked='true'] {\n  --grayscale: 0;\n  --translate: calc(100% + var(--width) * -0.15);\n}\n"
  },
  {
    "key": "svelte/switch/three-dimensional",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "style": "plus-switch {\n  --width: 10rem;\n  --height: 5rem;\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  overflow: visible;\n  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));\n  perspective: 32em;\n  border-radius: var(--height);\n}\n\nplus-switch::part(root) {\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  background: transparent;\n  border: solid calc(0.125 * var(--height)) #f0f0f0;\n  box-shadow:\n    0.5rem 0.875rem 0 -0.25rem #e0e0e0,\n    0.625rem 0.625rem 0 -0.25rem #e0e0e0,\n    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),\n    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),\n    inset 0.75rem 0.75rem #dfdfdf,\n    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),\n    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);\n  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);\n  transform-style: preserve-3d;\n}\n\nplus-switch::part(handle) {\n  width: var(--height);\n  height: var(--height);\n  background:\n    radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65% 50% no-repeat,\n    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%) 50%/200%;\n  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg) rotatex(-90deg)\n    translatey(-75%) rotate(45deg);\n  filter: Grayscale(var(--grayscale));\n}\n\nplus-switch[aria-checked='false'] {\n  --grayscale: 1;\n  --translate: calc(100% + var(--width) * -0.75);\n}\n\nplus-switch[aria-checked='true'] {\n  --grayscale: 0;\n  --translate: calc(100% + var(--width) * -0.15);\n}\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "vue/switch/three-dimensional",
    "script": "import '@htmlplus/ui/center.js';\nimport '@htmlplus/ui/switch.js';\n",
    "style": "plus-switch {\n  --width: 10rem;\n  --height: 5rem;\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  overflow: visible;\n  perspective-origin: calc(50% + var(--width)) calc(50% - var(--width));\n  perspective: 32em;\n  border-radius: var(--height);\n}\n\nplus-switch::part(root) {\n  width: calc(var(--width) * 1.25);\n  height: calc(var(--height) * 1.25);\n  background: transparent;\n  border: solid calc(0.125 * var(--height)) #f0f0f0;\n  box-shadow:\n    0.5rem 0.875rem 0 -0.25rem #e0e0e0,\n    0.625rem 0.625rem 0 -0.25rem #e0e0e0,\n    0.5rem 0.875rem 0.625rem -0.125rem rgb(191 191 191 / 75%),\n    inset 0.125rem -0.125rem 0.5rem rgb(245 245 245 / 50%),\n    inset 0.75rem 0.75rem #dfdfdf,\n    inset 0.75rem 0.75rem 0.75rem rgb(191 191 191 / 85%),\n    inset 0 1rem 0.75rem rgb(191 191 191 / 65%);\n  transform: rotatex(90deg) rotate(22.5deg) rotatey(22.5deg);\n  transform-style: preserve-3d;\n}\n\nplus-switch::part(handle) {\n  width: var(--height);\n  height: var(--height);\n  background:\n    radial-gradient(at 0 50%, #52a066, transparent 2.5rem) 0 50%/65% 50% no-repeat,\n    radial-gradient(at 50% 0%, #88d1a0 15%, #68b47d 35%, #66b47b, #77c28e 65%) 50%/200%;\n  transform: translate(var(--translate)) rotatey(-22.5deg) rotate(-22.5deg) rotatex(-90deg)\n    translatey(-75%) rotate(45deg);\n  filter: Grayscale(var(--grayscale));\n}\n\nplus-switch[aria-checked='false'] {\n  --grayscale: 1;\n  --translate: calc(100% + var(--width) * -0.75);\n}\n\nplus-switch[aria-checked='true'] {\n  --grayscale: 0;\n  --translate: calc(100% + var(--width) * -0.15);\n}\n",
    "template": "<plus-center>\n  <plus-switch checked></plus-switch>\n</plus-center>\n"
  },
  {
    "key": "angular/tabs/below",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "javascript/tabs/below",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "react/tabs/below",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/below",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/below",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "vue/tabs/below",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "angular/tabs/default",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "javascript/tabs/default",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "react/tabs/default",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/default",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/default",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "vue/tabs/default",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "angular/tabs/grow",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar grow>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "javascript/tabs/grow",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar grow>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "react/tabs/grow",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-bar grow>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/grow",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-bar grow>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/grow",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar grow>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "vue/tabs/grow",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar grow>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "angular/tabs/justify",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-tabs>\n  <plus-tabs-bar justify=\"start\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n<br />\n<plus-tabs>\n  <plus-tabs-bar justify=\"center\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n<br />\n<plus-tabs>\n  <plus-tabs-bar justify=\"end\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "javascript/tabs/justify",
    "script": "import '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs>\n  <plus-tabs-bar justify=\"start\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n<br />\n<plus-tabs>\n  <plus-tabs-bar justify=\"center\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n<br />\n<plus-tabs>\n  <plus-tabs-bar justify=\"end\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "react/tabs/justify",
    "script": "import '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-tabs>\n        <plus-tabs-bar justify=\"start\">\n          <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n        </plus-tabs-bar>\n      </plus-tabs>\n      <br />\n      <plus-tabs>\n        <plus-tabs-bar justify=\"center\">\n          <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n        </plus-tabs-bar>\n      </plus-tabs>\n      <br />\n      <plus-tabs>\n        <plus-tabs-bar justify=\"end\">\n          <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n        </plus-tabs-bar>\n      </plus-tabs>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/justify",
    "script": "import '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <>\n      <plus-tabs>\n        <plus-tabs-bar justify=\"start\">\n          <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n        </plus-tabs-bar>\n      </plus-tabs>\n      <br />\n      <plus-tabs>\n        <plus-tabs-bar justify=\"center\">\n          <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n        </plus-tabs-bar>\n      </plus-tabs>\n      <br />\n      <plus-tabs>\n        <plus-tabs-bar justify=\"end\">\n          <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n          <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n        </plus-tabs-bar>\n      </plus-tabs>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/justify",
    "script": "import '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs>\n  <plus-tabs-bar justify=\"start\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n<br />\n<plus-tabs>\n  <plus-tabs-bar justify=\"center\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n<br />\n<plus-tabs>\n  <plus-tabs-bar justify=\"end\">\n    <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n</plus-tabs>\n"
  },
  {
    "key": "vue/tabs/justify",
    "script": "import '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<div>\n  <plus-tabs>\n    <plus-tabs-bar justify=\"start\">\n      <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n      <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n      <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n    </plus-tabs-bar>\n  </plus-tabs>\n  <br />\n  <plus-tabs>\n    <plus-tabs-bar justify=\"center\">\n      <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n      <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n      <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n    </plus-tabs-bar>\n  </plus-tabs>\n  <br />\n  <plus-tabs>\n    <plus-tabs-bar justify=\"end\">\n      <plus-tabs-tab> Tab 1 </plus-tabs-tab>\n      <plus-tabs-tab> Tab 2 </plus-tabs-tab>\n      <plus-tabs-tab> Tab 3 </plus-tabs-tab>\n    </plus-tabs-bar>\n  </plus-tabs>\n</div>\n"
  },
  {
    "key": "angular/tabs/reverse",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar reverse>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "javascript/tabs/reverse",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar reverse>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "react/tabs/reverse",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-bar reverse>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/reverse",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\">\n      <plus-tabs-bar reverse>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/reverse",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar reverse>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "vue/tabs/reverse",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\">\n  <plus-tabs-bar reverse>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "angular/tabs/separate",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<header>\n  <plus-tabs value=\"tab-1\" connector=\"tabs-separate\">\n    <plus-tabs-bar>\n      <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n      <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n      <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n    </plus-tabs-bar>\n  </plus-tabs>\n</header>\n<section>\n  <plus-tabs-panels connector=\"tabs-separate\">\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</section>\n"
  },
  {
    "key": "javascript/tabs/separate",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<header>\n  <plus-tabs value=\"tab-1\" connector=\"tabs-separate\">\n    <plus-tabs-bar>\n      <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n      <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n      <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n    </plus-tabs-bar>\n  </plus-tabs>\n</header>\n<section>\n  <plus-tabs-panels connector=\"tabs-separate\">\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</section>\n"
  },
  {
    "key": "react/tabs/separate",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <>\n      <header>\n        <plus-tabs value=\"tab-1\" connector=\"tabs-separate\">\n          <plus-tabs-bar>\n            <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n            <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n            <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n          </plus-tabs-bar>\n        </plus-tabs>\n      </header>\n      <section>\n        <plus-tabs-panels connector=\"tabs-separate\">\n          <plus-tabs-panel value=\"tab-1\">\n            <b>Tab One</b>\n            <br />\n            <plus-faker></plus-faker>\n          </plus-tabs-panel>\n          <plus-tabs-panel value=\"tab-2\">\n            <b>Tab Two</b>\n            <br />\n            <plus-faker></plus-faker>\n          </plus-tabs-panel>\n          <plus-tabs-panel value=\"tab-3\">\n            <b>Tab Three</b>\n            <br />\n            <plus-faker></plus-faker>\n          </plus-tabs-panel>\n        </plus-tabs-panels>\n      </section>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/separate",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <>\n      <header>\n        <plus-tabs value=\"tab-1\" connector=\"tabs-separate\">\n          <plus-tabs-bar>\n            <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n            <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n            <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n          </plus-tabs-bar>\n        </plus-tabs>\n      </header>\n      <section>\n        <plus-tabs-panels connector=\"tabs-separate\">\n          <plus-tabs-panel value=\"tab-1\">\n            <b>Tab One</b>\n            <br />\n            <plus-faker></plus-faker>\n          </plus-tabs-panel>\n          <plus-tabs-panel value=\"tab-2\">\n            <b>Tab Two</b>\n            <br />\n            <plus-faker></plus-faker>\n          </plus-tabs-panel>\n          <plus-tabs-panel value=\"tab-3\">\n            <b>Tab Three</b>\n            <br />\n            <plus-faker></plus-faker>\n          </plus-tabs-panel>\n        </plus-tabs-panels>\n      </section>\n    </>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/separate",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<header>\n  <plus-tabs value=\"tab-1\" connector=\"tabs-separate\">\n    <plus-tabs-bar>\n      <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n      <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n      <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n    </plus-tabs-bar>\n  </plus-tabs>\n</header>\n<section>\n  <plus-tabs-panels connector=\"tabs-separate\">\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</section>\n"
  },
  {
    "key": "vue/tabs/separate",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<div>\n  <header>\n    <plus-tabs value=\"tab-1\" connector=\"tabs-separate\">\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n    </plus-tabs>\n  </header>\n  <section>\n    <plus-tabs-panels connector=\"tabs-separate\">\n      <plus-tabs-panel value=\"tab-1\">\n        <b>Tab One</b>\n        <br />\n        <plus-faker></plus-faker>\n      </plus-tabs-panel>\n      <plus-tabs-panel value=\"tab-2\">\n        <b>Tab Two</b>\n        <br />\n        <plus-faker></plus-faker>\n      </plus-tabs-panel>\n      <plus-tabs-panel value=\"tab-3\">\n        <b>Tab Three</b>\n        <br />\n        <plus-faker></plus-faker>\n      </plus-tabs-panel>\n    </plus-tabs-panels>\n  </section>\n</div>\n"
  },
  {
    "key": "angular/tabs/vertical",
    "script": "import { Component } from '@angular/core';\n\nimport '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}\n",
    "template": "<plus-tabs value=\"tab-1\" vertical>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "javascript/tabs/vertical",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\" vertical>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "react/tabs/vertical",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\" vertical>\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "react-experimental/tabs/vertical",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n\nfunction App() {\n  return (\n    <plus-tabs value=\"tab-1\" vertical>\n      <plus-tabs-bar>\n        <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n        <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n      </plus-tabs-bar>\n      <plus-tabs-panels>\n        <plus-tabs-panel value=\"tab-1\">\n          <b>Tab One</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-2\">\n          <b>Tab Two</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n        <plus-tabs-panel value=\"tab-3\">\n          <b>Tab Three</b>\n          <br />\n          <plus-faker></plus-faker>\n        </plus-tabs-panel>\n      </plus-tabs-panels>\n    </plus-tabs>\n  );\n}\nexport default App;\n"
  },
  {
    "key": "svelte/tabs/vertical",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\" vertical>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  },
  {
    "key": "vue/tabs/vertical",
    "script": "import '@htmlplus/ui/faker.js';\nimport '@htmlplus/ui/tabs-bar.js';\nimport '@htmlplus/ui/tabs-panel.js';\nimport '@htmlplus/ui/tabs-panels.js';\nimport '@htmlplus/ui/tabs-tab.js';\nimport '@htmlplus/ui/tabs.js';\n",
    "template": "<plus-tabs value=\"tab-1\" vertical>\n  <plus-tabs-bar>\n    <plus-tabs-tab value=\"tab-1\"> Tab 1 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-2\"> Tab 2 </plus-tabs-tab>\n    <plus-tabs-tab value=\"tab-3\"> Tab 3 </plus-tabs-tab>\n  </plus-tabs-bar>\n  <plus-tabs-panels>\n    <plus-tabs-panel value=\"tab-1\">\n      <b>Tab One</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-2\">\n      <b>Tab Two</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n    <plus-tabs-panel value=\"tab-3\">\n      <b>Tab Three</b>\n      <br />\n      <plus-faker></plus-faker>\n    </plus-tabs-panel>\n  </plus-tabs-panels>\n</plus-tabs>\n"
  }
];