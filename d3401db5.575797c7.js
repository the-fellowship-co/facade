(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(9),l=(n(0),n(177)),c={id:"todo_app",title:"Backend for a todo app",sidebar_label:"Backend for a todo app"},d={id:"bylding_backends/todo_app",title:"Backend for a todo app",description:"This tutorial will help you build and deploy a backend for a todo app. For this you",source:"@site/docs/bylding_backends/todo_app.md",permalink:"/docs/bylding_backends/todo_app",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/todo_app.md",sidebar_label:"Backend for a todo app",sidebar:"someSidebar",previous:{title:"Messages and Services",permalink:"/docs/bylding_backends/custom"},next:{title:"CLI Command",permalink:"/docs/references/cli"}},r=[{value:"Login",id:"login",children:[]},{value:"Create todoist project",id:"create-todoist-project",children:[]},{value:"Create identity block",id:"create-identity-block",children:[{value:"Create user model",id:"create-user-model",children:[]},{value:"Deploy identity block",id:"deploy-identity-block",children:[]},{value:"Test and debug your block",id:"test-and-debug-your-block",children:[]}]},{value:"Create todos block",id:"create-todos-block",children:[{value:"Create todo item model",id:"create-todo-item-model",children:[]},{value:"Deploy todos block",id:"deploy-todos-block",children:[]}]},{value:"Create communications block",id:"create-communications-block",children:[{value:"Create communication model",id:"create-communication-model",children:[]},{value:"Deploy communications block",id:"deploy-communications-block",children:[]},{value:"Test and debug your block",id:"test-and-debug-your-block-1",children:[]}]},{value:"Expose identity and todos blocks",id:"expose-identity-and-todos-blocks",children:[{value:"Deploy gate",id:"deploy-gate",children:[]},{value:"Querying the gate",id:"querying-the-gate",children:[]}]}],i={rightToc:r};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This tutorial will help you build and deploy a backend for a todo app. For this you\nwill create a project with three blocks and a gate to expose them."),Object(l.b)("h4",{id:"blocks"},"Blocks"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Identity"),Object(l.b)("li",{parentName:"ol"},"Todos"),Object(l.b)("li",{parentName:"ol"},"Communications")),Object(l.b)("h2",{id:"login"},"Login"),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"byld login")," to authenicate. If you don't have a token yet it. ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://forms.gle/2VGp3jgdndogwM939"}),"Request your token"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld login\n\nYour email: someone@example.com\nYour token: xxxxx\n")),Object(l.b)("p",null,"You\u2019re all set for building your first project."),Object(l.b)("h2",{id:"create-todoist-project"},"Create todoist project"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld new todoist\n")),Object(l.b)("p",null,"Now there is a new directory created with the name ",Object(l.b)("inlineCode",{parentName:"p"},"todoist/"),". Switch\ninto the newly created directory."),Object(l.b)("h2",{id:"create-identity-block"},"Create identity block"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block new identity\n")),Object(l.b)("p",null,"Switch into the newly created ",Object(l.b)("inlineCode",{parentName:"p"},"identity/")," directory."),Object(l.b)("h3",{id:"create-user-model"},"Create user model"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block g:model user\n")),Object(l.b)("p",null,"It creates two files, the actual model and the db changes needed for the new\nmodel."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class User < Byld::Model\n  enable only: [:get, :create]\nend\n")),Object(l.b)("p",null,"Let's add first_name  and last_name fields for User in the migration file."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class CreateUsers < ActiveRecord::Migration[5.2]\n  def change\n    create_table :users do |t|\n      t.string :first_name\n      t.string :last_name\n      t.string :email\n    end\n  end\nend\n")),Object(l.b)("h3",{id:"deploy-identity-block"},"Deploy identity block"),Object(l.b)("p",null,"Now, let us deploy the identity block and check its status."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n\ud83e\udd1e Deploying order...\n\ud83d\udc4c Deployment triggered!\n\n$ byld status\n\ntodoist\n\nblocks\n\n+----------+----------+\n| name     | status   |\n+----------+----------+\n| identity | running  |\n+----------+----------+\n\n")),Object(l.b)("h3",{id:"test-and-debug-your-block"},"Test and debug your block"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"byld console")," and ",Object(l.b)("inlineCode",{parentName:"p"},"byld logs")," commands come in handy to test and debug the\nblock after deploying."),Object(l.b)("h2",{id:"create-todos-block"},"Create todos block"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block new todos\n")),Object(l.b)("p",null,"Switch into the newly created ",Object(l.b)("inlineCode",{parentName:"p"},"todos/")," directory."),Object(l.b)("h3",{id:"create-todo-item-model"},"Create todo item model"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block g:model todo_item\n")),Object(l.b)("p",null,"It creates two files, the actual model and the db changes needed for the new\nmodel. Let's add ",Object(l.b)("inlineCode",{parentName:"p"},"publisher on: :todo_item_events")," to the model. This will publish ",Object(l.b)("inlineCode",{parentName:"p"},":todo_item_created"),", ",Object(l.b)("inlineCode",{parentName:"p"},":todo_item_updated")," and ",Object(l.b)("inlineCode",{parentName:"p"},":todo_item_destroyed")," events to other blocks. Later, you will use ",Object(l.b)("inlineCode",{parentName:"p"},":todo_item_created")," event to send emails to the assigned user."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class TodoItem < Byld::Model\n  enable only: [:get, :create, :update, :delete]\n  publisher on: :todo_item_events\nend\n")),Object(l.b)("p",null,"Let's add title, description and status fields for TodoItem in the migration\nfile."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class CreateTodoItems < ActiveRecord::Migration[5.2]\n  def change\n    create_table :todo_items do |t|\n      t.string :title\n      t.string :description\n      t.boolean :status\n      t.integer :assignee_id\n      t.datetime :completed_at\n      t.timestamps\n    end\n  end\nend\n")),Object(l.b)("h3",{id:"deploy-todos-block"},"Deploy todos block"),Object(l.b)("p",null,"Now, let us deploy the todos block and check its status."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n\ud83e\udd1e Deploying order...\n\ud83d\udc4c Deployment triggered!\n\n$ byld status\n\ntodoist\n\nblocks\n\n+----------+----------+\n| name     | status   |\n+----------+----------+\n| identity | running  |\n| todos    | running  |\n+----------+----------+\n\n")),Object(l.b)("h2",{id:"create-communications-block"},"Create communications block"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block new comms\n")),Object(l.b)("p",null,"Switch into the newly created ",Object(l.b)("inlineCode",{parentName:"p"},"comms/")," directory."),Object(l.b)("h3",{id:"create-communication-model"},"Create communication model"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld block g:model communication\n")),Object(l.b)("p",null,"It creates two files, the actual model and the db changes needed for the new\nmodel."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class Communication < Byld::Model\n  enable only: [:get, :create]\nend\n")),Object(l.b)("p",null,"Let's add fields to communications in the migration file."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class CreateCommunications < ActiveRecord::Migration[5.2]\n  def change\n    create_table :communications do |t|\n      t.integer :type\n      t.integer :from_id\n      t.integer :to_id\n      t.string :body\n      t.string :status\n      t.timestamps\n    end\n  end\nend\n")),Object(l.b)("p",null,"Now, let's subscribe to ",Object(l.b)("inlineCode",{parentName:"p"},":todo_item_created")," event to send emails to the\nassigned user. For this,  we need to connect comms with todos block\nto fetch todos for sending emails. Use ",Object(l.b)("inlineCode",{parentName:"p"},"byld connect [block]")," to do that."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld connect todos\n")),Object(l.b)("p",null,"Now, let's implement the handler to process ",Object(l.b)("inlineCode",{parentName:"p"},":todo_item_created")," event."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ruby"}),"class Communication < Byld::Model\n  include Todos\n  enable only: [:get, :create]\n\n  subscriber\n  def self.handle_todo_item_events(event)\n    case event.type\n    when :todo_item_created\n      log.info 'Sending email...'\n\n      todo_item = TodoItem.client.get(event.source_id)\n      communication = Communication.create!(type: 'EMAIL', to_id: todo_item.assignee_id, from_id: 'no-reply@todoist.com', body: 'New todo assigned to you')\n      communication.send!\n  end\n\n  def send!\n   # insert code to send emails\n  end\nend\n")),Object(l.b)("h3",{id:"deploy-communications-block"},"Deploy communications block"),Object(l.b)("p",null,"Now, let us deploy the comms block and check its status."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n\ud83e\udd1e Deploying order...\n\ud83d\udc4c Deployment triggered!\n\n$ byld status\n\ntodoist\n\nblocks\n\n+---------------+----------+\n| name          | status   |\n+---------------+----------+\n| identity      | running  |\n| todos         | running  |\n| comms         | running  |\n+---------------+----------+\n\n")),Object(l.b)("h3",{id:"test-and-debug-your-block-1"},"Test and debug your block"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"byld console")," and ",Object(l.b)("inlineCode",{parentName:"p"},"byld logs")," commands come in handy to test and debug the\nblock after deploying."),Object(l.b)("h2",{id:"expose-identity-and-todos-blocks"},"Expose identity and todos blocks"),Object(l.b)("p",null,"From the ",Object(l.b)("inlineCode",{parentName:"p"},"todoist/")," directory, run to create a gate for your project."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld gate new\n")),Object(l.b)("p",null,"Now there is a new directory created with the name ",Object(l.b)("inlineCode",{parentName:"p"},"gate/"),". Switch into the\nnewly created directory."),Object(l.b)("p",null,"Now, expose identity and todos block using,"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld gate expose identity\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld gate expose todos\n")),Object(l.b)("h3",{id:"deploy-gate"},"Deploy gate"),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"byld deploy")," to deploy the gate. This exposes all the blocks to the\nfrontends via GraphQL endpoints."),Object(l.b)("p",null,"When the block changes, you need to expose the block and deploy the gate again."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld deploy\n")),Object(l.b)("h3",{id:"querying-the-gate"},"Querying the gate"),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"byld status")," to see the status of the gate and blocks."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n\n+----------------------------------------+---------------------------------------+\n| status  | url                          | docs                                  |\n+----------------------------------------+---------------------------------------+\n| running | todoist.letsbyld.com         | todoist.letsbyld.com/graphiql         |\n+---------+------------------------------+---------------------------------------+\n\nblocks\n\n+---------------+------------+\n| name          | status     |\n+---------------+------------+\n| identity      | running    |\n| todos         | running    |\n| comms         | running    |\n+---------------+------------+\n")),Object(l.b)("p",null,"Use the ",Object(l.b)("inlineCode",{parentName:"p"},"todoist.letsbyld.com/graphiql")," url to view docs and test out your endpoints. You can use ",Object(l.b)("inlineCode",{parentName:"p"},"todoist.letsbyld.com")," url to power your UI across different platforms."))}b.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),s=b(n),u=o,m=s["".concat(c,".").concat(u)]||s[u]||p[u]||l;return n?a.a.createElement(m,d({ref:t},i,{components:n})):a.a.createElement(m,d({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=u;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d.mdxType="string"==typeof e?e:o,c[1]=d;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);