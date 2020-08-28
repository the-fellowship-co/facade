(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{160:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(9),o=(t(0),t(177)),i={id:"working_with_models",title:"Working with models",sidebar_label:"Working with models"},l={id:"bylding_backends/working_with_models",title:"Working with models",description:"Model is the place to implement all your business logic. Methods defined in models can be exposed to other blocks and frontends. Model by default has",source:"@site/docs/bylding_backends/working_with_model.md",permalink:"/docs/bylding_backends/working_with_models",editUrl:"https://github.com/the-fellowship-co/facade/edit/master/docs/bylding_backends/working_with_model.md",sidebar_label:"Working with models",sidebar:"someSidebar",previous:{title:"Working with blocks",permalink:"/docs/bylding_backends/working_with_blocks"},next:{title:"Deploying and testing blocks",permalink:"/docs/bylding_backends/deploying_and_testing_blocks"}},s=[{value:"Interface Markup",id:"interface-markup",children:[]},{value:"Migration",id:"migration",children:[]},{value:"Built-in methods",id:"built-in-methods",children:[]},{value:"Associations",id:"associations",children:[]},{value:"Validations",id:"validations",children:[]}],c={rightToc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Model is the place to implement all your business logic. Methods defined in models can be exposed to other blocks and frontends. Model by default has\n",Object(o.b)("inlineCode",{parentName:"p"},"get"),", ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update"),", ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"list")," interface methods. You can\nalso add additional methods and control what needs to be exposed using ",Object(o.b)("inlineCode",{parentName:"p"},"inf")," markup."),Object(o.b)("h3",{id:"interface-markup"},"Interface Markup"),Object(o.b)("p",null,"You could add additional interface methods using ",Object(o.b)("inlineCode",{parentName:"p"},"inf(RequestType) {ReturnType}"),"\nover it. Supported request and return types are: ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),", ",Object(o.b)("inlineCode",{parentName:"p"},"String"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"Integer"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Float"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Bool"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Byld::Messages"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Byld::Model")," and Arrays ",Object(o.b)("inlineCode",{parentName:"p"},"([ID|String|...])"),"."),Object(o.b)("p",null,"Model's interface methods can be accessed like ",Object(o.b)("inlineCode",{parentName:"p"},"[Model].client.[method_name]")," from other blocks and gates."),Object(o.b)("p",null,"Also, ",Object(o.b)("inlineCode",{parentName:"p"},"Byld::Model")," is an extension of ",Object(o.b)("a",{href:"https://guides.rubyonrails.org/active_record_basics.html",target:"_blank",rel:"noopener noreferrer"},"ActiveRecord"),", so all of its methods are available to use on it. You can learn more about CRUD methods and querying an Active Record model in the ",Object(o.b)("a",{href:"https://guides.rubyonrails.org/active_record_basics.html#crud-reading-and-writing-data",target:"_blank",rel:"noopener noreferrer"},"CRUD methods guide")," and ",Object(o.b)("a",{href:"https://guides.rubyonrails.org/active_record_querying.html",target:"_blank",rel:"noopener noreferrer"},"Query Interface guide"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"class User < Byld::Model\n  enable only: [:get, :create]\n\n  inf(ID) {Bool}\n  def self.activate!(id)\n    user = User.find(id)\n    user.active = true\n    user.save!\n  end\nend\n")),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"byld block g:model [model-name]")," to generate a model. It creates two\nfiles the actual model and the db migration needed for the new model."),Object(o.b)("h3",{id:"migration"},"Migration"),Object(o.b)("p",null,"Migration files are used create the schema for the models. You can define the\nnecessary fields for the model and add further migrations to add/ remove\nfields, create primary keys, indexes etc.."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"class CreateUsers < ActiveRecord::Migration[5.2]\n  def change\n    create_table :users do |t|\n      t.string :first_name\n      t.string :last_name\n      t.string :email\n    end\n  end\nend\n")),Object(o.b)("p",null,"You can learn more about writing database migrations in ",Object(o.b)("a",{href:"https://guides.rubyonrails.org/active_record_migrations.html",target:"_blank",rel:"noopener noreferrer"},"ActiveRecord migration guide"),"."),Object(o.b)("h3",{id:"built-in-methods"},"Built-in methods"),Object(o.b)("p",null,"The block docs contains the details of all built-in methods, their request and response types. The block docs will be generated automatically once you deploy. After deploying, you use ",Object(o.b)("inlineCode",{parentName:"p"},"byld status")," to get the link to access your docs. Documentation will have all the interface method signature and defintions of the request and response types."),Object(o.b)("p",null,"Model's interface methods can be accessed via the client ",Object(o.b)("inlineCode",{parentName:"p"},"[Model].client.[method_name]")," from other blocks and gates."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ byld status\n\ngate\n\n+-------------------------------+------------------------------+\n| status  | url                 | docs                         |\n+-------------------------------+------------------------------+\n| running | amazon.letsbyld.com | amazon.letsbyld.com/graphiql |\n+---------+---------------------+------------------------------+\n\nblocks\n\n+----------+------------+\n| name     | status     |\n+----------+------------+\n| order    | running    |\n| identity | running    |\n+----------+------------+\n")),Object(o.b)("h3",{id:"associations"},"Associations"),Object(o.b)("p",null,"An association is a connection between two Byld::Model in the same block. Why do we need associations between models? Because they make data representation and common operations easier in your code."),Object(o.b)("p",null,"Byld supports ",Object(o.b)("inlineCode",{parentName:"p"},"belongs_to"),", ",Object(o.b)("inlineCode",{parentName:"p"},"has_one")," and all types of ",Object(o.b)("inlineCode",{parentName:"p"},"has_many")," associations. You can learn more about associations in ",Object(o.b)("a",{href:"https://guides.rubyonrails.org/association_basics.html#why-associations-questionmark",target:"_blank",rel:"noopener noreferrer"},"ActiveRecord association guide"),"."),Object(o.b)("p",null,"For example, Order model will have many lineitems, you can represent this association like"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),"class Order < Byld::Model\n  has_many :line_items\nend\n\nclass LineItem < Byld::Model\n  belongs_to :order\nend\n")),Object(o.b)("h3",{id:"validations"},"Validations"),Object(o.b)("p",null,"Use ActiveRecord valiations to write all your validations logic. Before saving an Active Record object, it runs your validations. If these validations produce any errors, it does not save the object."),Object(o.b)("p",null,"You can also run these validations on your own. valid? triggers your validations and returns true if no errors were found in the object, and false otherwise."),Object(o.b)("p",null,"You can learn more about writing validation in ",Object(o.b)("a",{href:"https://guides.rubyonrails.org/active_record_validations.html",target:"_blank",rel:"noopener noreferrer"},"ActiveRecord validation guide"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ruby"}),'class User < Byld::Model\n  validates :first_name, presence: true\nend\n\nUser.create(first_name: "John Doe").valid? # => true\nUser.create(first_name: nil).valid? # => false\n')))}d.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||o;return t?r.a.createElement(m,l({ref:n},c,{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);