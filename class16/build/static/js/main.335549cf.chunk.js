(this.webpackJsonpclass1=this.webpackJsonpclass1||[]).push([[0],{26:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),l=o(10),r=o.n(l),a=o(2),i=o(3),s=o(5),u=o(4),d=o(6),h=o(12),j=o(8),p=o(11),b=o.n(p),f=o(0),m=function(t){Object(s.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(a.a)(this,o);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={text:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit({id:b.a.generate(),text:t.state.text,complete:!1}),t.setState({text:""})},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{name:"text",value:this.state.text,onChange:this.handleChange,placeholder:"todo..."}),Object(f.jsx)("button",{onClick:this.handleSubmit,children:"add todo"})]})}}]),o}(c.a.Component),O=function(t){return Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(f.jsx)("div",{style:{textDecoration:t.todo.complete?"line-through":""},onClick:t.toggleComplete,children:t.todo.text}),Object(f.jsx)("button",{onClick:t.onDelete,children:"x"})]})},g=function(t){Object(s.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(a.a)(this,o);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={todos:[],todoToShow:"all",toggleAllComplete:!0},t.addTodo=function(e){t.setState((function(t){return{todos:[e].concat(Object(h.a)(t.todos))}}))},t.toggleComplete=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{complete:!t.complete}):t}))}}))},t.updateTodoToShow=function(e){t.setState({todoToShow:e})},t.handleDeleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.removeAllTodosThatAreComplete=function(){t.setState((function(t){return{todos:t.todos.filter((function(t){return!t.complete}))}}))},t}return Object(i.a)(o,[{key:"render",value:function(){var t=this,e=[];return"all"===this.state.todoToShow?e=this.state.todos:"active"===this.state.todoToShow?e=this.state.todos.filter((function(t){return!t.complete})):"complete"===this.state.todoToShow&&(e=this.state.todos.filter((function(t){return t.complete}))),Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{onSubmit:this.addTodo}),e.map((function(e){return Object(f.jsx)(O,{toggleComplete:function(){return t.toggleComplete(e.id)},onDelete:function(){return t.handleDeleteTodo(e.id)},todo:e},e.id)})),Object(f.jsxs)("div",{children:["todos left: ",this.state.todos.filter((function(t){return!t.complete})).length]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return t.updateTodoToShow("all")},children:"all"}),Object(f.jsx)("button",{onClick:function(){return t.updateTodoToShow("active")},children:"active"}),Object(f.jsx)("button",{onClick:function(){return t.updateTodoToShow("complete")},children:"complete"})]}),this.state.todos.some((function(t){return t.complete}))?Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:this.removeAllTodosThatAreComplete,children:"remove all complete todos"})}):null,Object(f.jsx)("div",{children:Object(f.jsxs)("button",{onClick:function(){return t.setState((function(t){return{todos:t.todos.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{complete:t.toggleAllComplete})})),toggleAllComplete:!t.toggleAllComplete}}))},children:["toggle all complete: ","".concat(this.state.toggleAllComplete)]})})]})}}]),o}(c.a.Component),v=function(t){Object(s.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(a.a)(this,o);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.increment=function(){t.setState({count:t.state.count+1})},t.decrement=function(){t.setState({count:t.state.count-1})},t}return Object(i.a)(o,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(g,{})})}}]),o}(c.a.Component),x=v;r.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.335549cf.chunk.js.map