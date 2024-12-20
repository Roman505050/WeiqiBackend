"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[546],{5246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"guidelines/contribution/master-branch","title":"Master Branch Protection","description":"The master branch is the primary branch in a Git repository and typically represents the production environment. To ensure the stability and quality of the codebase, it is crucial to protect the master branch and prevent direct commits to it. This document outlines the reasons for protecting the master branch and provides best practices for managing changes in the repository.","source":"@site/docs/guidelines/contribution/master-branch.md","sourceDirName":"guidelines/contribution","slug":"/guidelines/contribution/master-branch","permalink":"/WeiqiBackend/docs/guidelines/contribution/master-branch","draft":false,"unlisted":false,"editUrl":"https://github.com/Roman505050/WeiqiBackend/tree/master/packages/docs/docs/guidelines/contribution/master-branch.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Master Branch Protection","sidebar_position":0},"sidebar":"guidelinesSidebar","previous":{"title":"Contribution","permalink":"/WeiqiBackend/docs/category/contribution"},"next":{"title":"Branch Workflow","permalink":"/WeiqiBackend/docs/guidelines/contribution/branch-workflow"}}');var i=n(4848),o=n(8453);const s={title:"Master Branch Protection",sidebar_position:0},a="Master Branch Protection",c={},h=[{value:"Why Protect the <code>master</code> Branch?",id:"why-protect-the-master-branch",level:2},{value:"Workflow in this Repository",id:"workflow-in-this-repository",level:2},{value:"1. Create a New Branch",id:"1-create-a-new-branch",level:3},{value:"2. Make Changes",id:"2-make-changes",level:3},{value:"3. Submit a Pull Request",id:"3-submit-a-pull-request",level:3},{value:"4. Review and Approval",id:"4-review-and-approval",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"master-branch-protection",children:"Master Branch Protection"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"master"})," branch is the primary branch in a Git repository and typically represents the production environment. To ensure the stability and quality of the codebase, it is crucial to protect the ",(0,i.jsx)(t.code,{children:"master"})," branch and prevent direct commits to it. This document outlines the reasons for protecting the ",(0,i.jsx)(t.code,{children:"master"})," branch and provides best practices for managing changes in the repository."]}),"\n",(0,i.jsxs)(t.h2,{id:"why-protect-the-master-branch",children:["Why Protect the ",(0,i.jsx)(t.code,{children:"master"})," Branch?"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"master"})," branch is often used to represent the production-ready code of the repository. Protecting the ",(0,i.jsx)(t.code,{children:"master"})," branch helps ensure that the codebase remains stable, deployable, and free of errors. Enforcing a policy that requires all changes to be submitted through Pull Requests (PRs) allows you to maintain the quality and integrity of the code while avoiding disruptions in the production environment."]}),"\n",(0,i.jsx)(t.h2,{id:"workflow-in-this-repository",children:"Workflow in this Repository"}),"\n",(0,i.jsxs)(t.p,{children:["In this repository, the ",(0,i.jsx)(t.code,{children:"master"})," branch is protected, and direct commits are not allowed. All changes must be submitted via Pull Requests (PRs) to ensure the stability and deployability of the codebase at all times. The following guidelines outline the workflow for managing changes in this repository:"]}),"\n",(0,i.jsx)(t.h3,{id:"1-create-a-new-branch",children:"1. Create a New Branch"}),"\n",(0,i.jsxs)(t.p,{children:["When making changes to the codebase, create a new branch from the ",(0,i.jsx)(t.code,{children:"master"})," or ",(0,i.jsx)(t.code,{children:"dev"})," branch. The branch name should be descriptive and follow the naming conventions established in the repository guidelines."]}),"\n",(0,i.jsx)(t.h3,{id:"2-make-changes",children:"2. Make Changes"}),"\n",(0,i.jsx)(t.p,{children:"Implement the necessary changes in the new branch, adhering to the project's coding standards and guidelines. Ensure that your changes are well-tested and do not introduce any errors or regressions."}),"\n",(0,i.jsx)(t.h3,{id:"3-submit-a-pull-request",children:"3. Submit a Pull Request"}),"\n",(0,i.jsxs)(t.p,{children:["Once your changes are complete, submit a Pull Request (PR) to merge your branch into the ",(0,i.jsx)(t.code,{children:"master"})," or ",(0,i.jsx)(t.code,{children:"dev"})," branch. Provide a clear description of the changes, including relevant details or context to assist reviewers."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GitHub Actions"})," will automatically run tests and checks to verify that the changes meet the repository's quality standards.",(0,i.jsx)(t.br,{}),"\n","All checks must pass before the PR can be merged."]})}),"\n",(0,i.jsx)(t.h3,{id:"4-review-and-approval",children:"4. Review and Approval"}),"\n",(0,i.jsx)(t.p,{children:"The PR will be reviewed by other contributors or maintainers. They may provide feedback, suggest improvements, or request changes. Once the changes are approved, the PR will be merged into the target branch."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["Protecting the ",(0,i.jsx)(t.code,{children:"master"})," branch and following a structured workflow for managing changes are essential for maintaining the stability and quality of the codebase. By adhering to these practices, you can ensure that the production environment remains stable, deployable, and free from errors, offering a seamless experience for both users and contributors."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);