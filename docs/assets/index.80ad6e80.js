import{f as F}from"./index.00671a97.js";import{r as h,o as u,g as y,a as l,w as t,b as e,d as a,n as w,t as i,F as R,k as D,c as A,j as P,f as z,h as T,_ as E,a9 as V}from"./index.4a6c6b42.js";const H=a("p",null,[e("When there is no data, a default text will be displayed. You can override it via the "),a("code",null,"no-data"),e(" slot.")],-1),W=a("br",null,null,-1),K=a("p",null,[e("You can align the columns contents separately by adding an "),a("code",null,"align"),e(` key in each header
definition (`),a("code",null,"left"),e(", "),a("code",null,"center"),e(" or "),a("code",null,"right"),e(")."),a("br"),e(`
If you don't define any, `),a("code",null,"left"),e(` will be implicit.
`)],-1),O=a("p",null,[e("Even with the "),a("code",null,"no-headers"),e(" option, the "),a("code",null,"headers"),e(` are still required for various
reasons, like getting the number of columns and sorting/filtering keys.`)],-1),U=a("p",null,[e("A table footer can be added via the "),a("code",null,"footer"),e(` slot. If present, the footer will span on
all the columns by default.
`)],-1),J={class:"w-flex justify-end"},Y=a("strong",{class:"mr2"},"Total:",-1),G=a("p",null,[e("The "),a("code",null,"footer-row"),e(" slot will give you more flexibility as it lets you define the whole table row.")],-1),X=a("p",null,"It can be useful if you want to keep the columns alignments in the footer.",-1),Q=a("p",null,[e("You can resize the columns by dragging their edges left or right."),a("br"),e(`
If you want the whole cell content to be on a single line and truncated with the ellipsis
(`),a("code",null,"..."),e("), you can apply this CSS.")],-1),Z=a("p",null,[e(`In some apps, it makes sense to save the prefered table layout of the user, and reapply it
every time this table is loaded. Here is a demo of how to do so.`),a("br"),e(`
To test it, first resize the columns, then refresh the page to see the same layout.`)],-1),$=a("p",null,`This is completely external to Wave UI, but this example shows you a way to do it in your
code as it is a frequent use case.`,-1),ee=a("p",null,[e("To make a column sticky, you only need to add "),a("code",null,"sticky: true"),e(` to the header of that
column.`),a("br"),e(`
The sticky mechanism is done via CSS (position: sticky). So if you set multiple sticky
columns, one will overlap the previous one as you scroll.`)],-1),te=a("p",{class:"grey"},"Scroll the table horizontally to observe the behavior.",-1),ae={class:"w-flex align-center mb2"},le=a("p",null,[e(`To make the sorting API very easy to use and remember (and avoid complex array or object structures),
the `),a("strong",{class:"code"},"w-table"),e("'s sorting is defined with a header key string preceded by a "),a("code",null,"+"),e(` for ASC,
or a `),a("code",null,"-"),e(" for DESC. For instance, in this example: "),a("code",null,"'+firstName'"),e(`.
`)],-1),ne=a("code",null,".w-table__col--highlighted",-1),ie=a("br",null,null,-1),se=a("code",null,"table > colgroup",-1),oe=a("p",null,[e(`When dealing with a lot of table entries, you will most likely need the sorting to be done
in the backend.`),a("br"),e(`
For this you can use the asynchronous sorting and update the table rows from outside Wave UI.`)],-1),re=a("p",null,[e(`Filtering the table rows is very straightforward: you only need to provide your filtering function to the
`),a("strong",{class:"code"},"w-table"),e(" component and it will be applied to the table."),a("br"),e(`
Setting the filter to `),a("code",null,"null"),e(" or "),a("code",null,"false"),e(" or "),a("code",null,"undefined"),e(" will remove any previous filter.")],-1),de={class:"w-flex wrap mb3"},me=a("p",null,[e("You could also apply a filter globally, which looks into all the columns at once."),a("br"),e(`
Here is one cool way to do it.`)],-1),ce=a("strong",null,[e(`If you don't need the RegExp power, you can simply return
`),a("code",null,"allTheColumns.toLowerCase().includes(keyword)"),e(` instead.
`)],-1),he=a("br",null,null,-1),be=a("br",null,null,-1),ue=a("code",null,"|",-1),fe=a("br",null,null,-1),pe=a("code",null,"new RegExp(keyword, 'i')",-1),ye=a("code",null,"new RegExp(`\\\\b${keyword}\\\\b`, 'i')",-1),Ne=a("code",null,"floretta",-1),ge=a("code",null,"florett",-1),we=a("p",null,[e("When the table content is not ready straight away, you can use the "),a("code",null,"loading"),e(` prop to display
a progress bar while loading.`)],-1),ke=a("p",null,"The pagination can be provided as an object:",-1),xe=T(`<p>More details in the <a href="#pagination">API section</a>.</p><p>The pagination is a two-way binding object: if you modify any property inside it, the table
will re-paginate and update.</p><p>You are free to use <code>start</code> &amp; <code>end</code> or <code>page</code> and <code>itemsPerPage</code>
options at your convenience when triggering a pagination.
</p>`,3),ve=a("p",null,"This example showcases an asynchronous pagination with backend fetching of the table items.",-1),_e=a("p",null,"Click a row to see it highlighted and get information about the selected item.",-1),Fe=a("p",null,[e("By default, the selection will use the "),a("code",null,"primary"),e(" color and apply an opacity of "),a("code",null,"0.2"),e(`.
If this is not what you want, you can override it via CSS (`),a("code",null,".w-table__row--selected td:before"),e(`).
`)],-1),Se=a("span",{class:"code"},"selectable-rows",-1),Ie=a("p",null,[e("You can enable the rows selection by adding the "),a("code",null,"selectable-rows"),e(` prop, or disable it by
removing it (by default) - and this is the same as passing a boolean - but you can also set it to `),a("code",null,"1"),e(`
to allow a single selection only.
`)],-1),Re=a("span",{class:"code"},"force-selection",-1),De=a("p",null,[e("Eventually, you can use the "),a("code",null,"force-selection"),e(` prop to prevent unselecting a row when only
one remain selected.
`)],-1),Ce=a("span",{class:"code"},"@row-select",-1),Le=T(`<p>This event is fired each time a row is selected <strong>or unselected</strong> (so you don&#39;t need to listen
to 2 different events). <br>
As shown in this example (under the table), the <span class="code">@row-select</span> event will give you access to useful
information such as:</p><ul><li><code>item</code>: the clicked row object</li><li><code>selected</code>: a boolean telling if the row is being selected or unselected</li><li><code>selectedRows</code>: an array of all the selected rows objects</li></ul>`,2),Te=a("div",{class:"mt4 title4"},"Selection info:",-1),Ee=a("p",null,`Wave UI offers a convenient way to provide an array of selected rows and keeping your array in sync
with the selected rows after user interaction.`,-1),Me=a("ul",null,[a("li",null,[a("strong",null,"In Vue 2"),e(", you can do 2-way binding on any variable other than the "),a("strong",{class:"code"},"v-model"),e(" using the "),a("code",null,".sync"),e(" modifier.")]),a("li",null,[a("strong",null,"In Vue 3"),e(", multiple "),a("strong",{class:"code"},"v-model"),e(" are supported in order to achieve 2-way binding. So you don't need "),a("code",null,".sync"),e(".")])],-1),Be={class:"mt4"},je={class:"ml2"},Ae=a("br",null,null,-1),Ve=a("code",null,"id",-1),qe=a("code",null,"uid-key",-1),Pe=a("p",null,"You can customize the headers labels and/or each row cells.",-1),ze=a("p",null,[e("In this example, only the headers are customized via the "),a("code",null,"header-label"),e(" slot.")],-1),He=a("p",null,[e("In this example, only the items cells are customized via the "),a("code",null,"item"),e(` slot
(and the headers are hidden).`)],-1),We={key:0},Ke={class:"grey mr2"},Oe=T(`<p>If you only need to override 1 particular column you can do it via the <code>item-cell.xxx</code> slot,
where <code>xxx</code> is a key defined in the headers.
In this example: <code>id</code>, <code>firstName</code>, <code>lastName</code>.<br><br>

If it&#39;s more convenient, you can also override a particular cell by its index like <code>item-cell.i</code>,
where <code>i</code> is a an integer starting at 1.</p>`,1),Ue=a("p",null,[e(`In this example, the full <tr> DOM element is customized, so you can add your own classes
and full layout.`),a("br"),e(`
As you notice, the `),a("code",null,"item"),e(` slot gives you full flexibility, but the drawback is that's more
code to write.`)],-1),Je=["onClick"],Ye=a("span",{class:"code"},"colspan",-1),Ge=a("p",null,[e("This example is showcasing another useful case: handling a colspan attribute."),a("br"),e(`
All the cells of all the rows are `),a("code",null,"colspan"),e("'d to one, and a custom row layout is applied.")],-1),Xe=["onClick"],Qe=["colspan"],Ze={class:"title3"},$e={class:"mr2"},et=a("p",null,[e("In addition to the full responsiveness, the "),a("code",null,"w-table"),e(` can be presented in a mobile friendly layout,
if the data it contains would not fit on mobile.`),a("br"),e(`
You can decide to trigger the mobile layout or not on each table, individually, via the `),a("code",null,"mobile-breakpoint"),e(`
parameter.`),a("br"),e(`
It can be very useful when multiple tables of data are presented, with more or less content, which
should be displayed differently.`),a("br"),a("br"),e(`
For this example, resize your browser to 700px or less to trigger the mobile layout.
`)],-1),tt=a("p",null,[e("To stay lean and efficient, the minimum JavaScript behavior is added to the "),a("code",null,"w-table"),e(`
component.`),a("br"),e(`
One thing that is not calculated on the mobile layout is the labels column width (default: 6.5em).`),a("br"),e(`
You can override it to set the width you want via:
`)],-1);function at(o,s,p,S,n,f){const r=h("title-link"),m=h("w-table"),c=h("example"),N=h("w-button"),k=h("w-icon"),M=h("w-flex"),C=h("ssh-pre"),B=h("w-tag"),j=h("w-radios"),x=h("alert"),q=h("w-input");return u(),y("div",null,[l(r,{h2:""},{default:t(()=>[e("Basic")]),_:1}),l(c,null,{pug:t(()=>[e('w-table(:headers="table.headers" :items="table.items")')]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("When there is no data")]),_:1}),H,l(c,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="[]")
br
w-table(:headers="table.headers" :items="[]")
  template(#no-data) \u{1F44C} There is no data! \u{1F44C}`)]),html:t(()=>[e(`<w-table :headers="table.headers" :items="[]"></w-table>

<br />
<w-table :headers="table.headers" :items="[]">
  <template #no-data>
    \u{1F44C} There is no data! \u{1F44C}
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:[]},null,8,["headers"]),W,l(m,{headers:n.table1.headers,items:[]},{"no-data":t(()=>[e("\u{1F44C} There is no data! \u{1F44C}")]),_:1},8,["headers"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Alignments")]),_:1}),K,l(c,null,{pug:t(()=>[e('w-table(:headers="table.headers" :items="table.items")')]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table2.headers,items:n.table2.items},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--no-headers"},{default:t(()=>[e("No headers")]),_:1}),O,l(c,null,{pug:t(()=>[e('w-table(:items="table.items" :headers="table.headers" no-headers)')]),html:t(()=>[e(`<w-table
  :items="table.items"
  :headers="table.headers"
  no-headers>
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,"no-headers":""},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--fixed-headers"},{default:t(()=>[e("Fixed headers")]),_:1}),l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  style="height: 250px">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table3.headers,items:n.table3.items,"fixed-headers":"",style:{height:"250px"}},null,8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"example--footer"},{default:t(()=>[e("Footer")]),_:1}),l(r,{h3:"",slug:"example--footer-slot"},{default:t(()=>[e("Footer slot")]),_:1}),U,a("div",J,[l(N,{onClick:s[0]||(s[0]=d=>n.table3.fixedFooter=!n.table3.fixedFooter),outline:!n.table3.fixedFooter,round:""},{default:t(()=>[a("span",{class:w(["code",n.table3.fixedFooter?"contrast-color":"primary"])},"fixed-footer",2)]),_:1},8,["outline"])]),l(c,null,{pug:t(()=>[e(`w-table(
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px")
  template(#footer)
    w-flex(justify-space-between)
      w-button(round sm @click="addRow")
        w-icon.mr1 wi-plus
        | add person
      div
        strong.mr2 Total:
        | `+i("{{ table.items.length }}")+" persons",1)]),html:t(()=>[e(`<w-table
  ref="table"
  :headers="table.headers"
  :items="table.items"
  :fixed-footer="table.fixedFooter"
  style="height: 250px">
  <template #footer>
    <w-flex justify-space-between>
      <w-button round sm @click="addRow">
        <w-icon class="mr1">wi-plus</w-icon>
        add person
      </w-button>

      <div>
        <strong class="mr2">Total:</strong>
        `+i("{{ table.items.length }}")+` persons
      </div>
    </w-flex>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    fixedFooter: false
  },
}),

methods: {
  addRow () {
    this.table.items.push({
      id: this.table.items.length + 1,
      firstName: 'John',
      lastName: 'Doe'
    })
    this.$nextTick(() => {
      const table = this.$refs.table.$el
      table.scrollTo({ top: table.scrollHeight, behavior: 'smooth' })
    })
  }
}
`)]),default:t(()=>[l(m,{ref:"table",headers:n.table3.headers,items:n.table3.items,"fixed-footer":n.table3.fixedFooter,style:{height:"250px"}},{footer:t(()=>[l(M,{"justify-space-between":""},{default:t(()=>[l(N,{round:"",sm:"",onClick:f.addRow},{default:t(()=>[l(k,{class:"mr1"},{default:t(()=>[e("wi-plus")]),_:1}),e("add person")]),_:1},8,["onClick"]),a("div",null,[Y,e(i(n.table3.items.length)+" persons",1)])]),_:1})]),_:1},8,["headers","items","fixed-footer"])]),_:1}),l(r,{h3:"",slug:"example--footer-slot"},{default:t(()=>[e("Footer-row slot")]),_:1}),G,X,l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px")
  template(#footer-row)
    tr
      th.py1(
        v-for="&#40;header, i&#41; in table3.headers"
        :key="i"
        :class="\`\${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`")
        | `+i("{{ header.label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items"
  fixed-footer
  style="height: 250px">
  <template #footer-row>
    <tr>
      <th
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`py1 \${i ? 'px1' : 'px2'} text-\${header.align || 'left'}\`">
        `+i("{{ header.label }}")+`
      </th>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
})
`)]),default:t(()=>[l(m,{headers:n.table3.headers,"no-headers":"",items:n.table3.items,"fixed-footer":n.table3.fixedFooter,style:{height:"250px"}},{"footer-row":t(()=>[a("tr",null,[(u(!0),y(R,null,D(n.table3.headers,(d,b)=>(u(),y("th",{class:w(["py1",`${b?"px1":"px2"} text-${d.align||"left"}`]),key:b},i(d.label),3))),128))])]),_:1},8,["headers","items","fixed-footer"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Built-in column resizing")]),_:1}),Q,l(C,{language:"css",dark:o.$store.state.darkMode},{default:t(()=>[e(`.w-table__cell {
  white-space: nowrap;
}
`)]),_:1},8,["dark"]),l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns)`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns>
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table7.headers,items:n.table7.items,"resizable-columns":""},null,8,["headers","items"])]),_:1}),l(r,{h3:""},{default:t(()=>[e("Saving the table layout in localStorage")]),_:1}),Z,l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  resizable-columns
  @column-resize="onColumnResize">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', width: '50' },
      { label: 'Content', key: 'content', width: '70%' },
      { label: 'First name', key: 'firstName' }
    ],
    items: [
      { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Floretta' },
      { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Nellie' },
      { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.', firstName: 'Rory' },
    ]
  }
}),

methods: {
  onColumnResize ({ index, widths }) {
    widths.forEach((width, i) => (this.table.headers[i].width = width))

    // Save the table layout in localStorage.
    localStorage.tableWidths = widths
  }
},

mounted () {
  // Reapply the saved table layout.
  localStorage.tableWidths?.split(',').forEach((width, i) => (this.table.headers[i].width = width))
}
`)]),default:t(()=>[l(m,{headers:n.table8.headers,items:n.table8.items,"resizable-columns":"",onColumnResize:f.onColumnResize},null,8,["headers","items","onColumnResize"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Toggling column visibility")]),_:1}),$,l(c,null,{pug:t(()=>[e(`w-tag.ma1(
  v-for="&#40;header, index&#41; in table.headers"
  :key="index"
  :bg-color="header.hidden ? `+i(o.$store.state.darkMode?"grey-dark4":"grey-light4")+` : 'primary'"
  @click.stop="header.hidden = !header.hidden")
  w-icon.mr2 mdi mdi-eye`+i("{{ header.hidden ? '-off' : ''}}")+`
  | `+i("{{ header.label }}")+`

w-table.mt2(:headers="table.headers.filter&#40;header => !header.hidden&#41;" :items="table.items")`,1)]),html:t(()=>[e(`Toggle columns:
<w-tag
  v-for="(header, index) in table.headers"
  :key="index"
  class="ma1"
  :bg-color="header.hidden ? 'grey-light4' : 'primary'"
  @click.stop="header.hidden = !header.hidden">
  <w-icon class="mr2">mdi mdi-eye`+i("{{ header.hidden ? '-off' : ''}}")+`</w-icon>
  `+i("{{ header.label }}")+`
</w-tag>

<w-table
  :headers="table.headers.filter(header => !header.hidden)"
  :items="table.items"
  class="mt2">
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id', hidden: false },
      { label: 'First name', key: 'firstName', hidden: false },
      { label: 'Last name', key: 'lastName', hidden: false }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[e("Toggle columns:"),(u(!0),y(R,null,D(n.table6.headers,(d,b)=>(u(),A(B,{class:"ma1",key:b,"bg-color":d.hidden?o.$store.state.darkMode?"grey-dark4":"grey-light4":"primary",onClick:P(g=>d.hidden=!d.hidden,["stop"])},{default:t(()=>[l(k,{class:"mr2"},{default:t(()=>[e("mdi mdi-eye"+i(d.hidden?"-off":""),1)]),_:2},1024),e(i(d.label),1)]),_:2},1032,["bg-color","onClick"]))),128)),l(m,{class:"mt2",headers:n.table6.headers.filter(d=>!d.hidden),items:n.table6.items},null,8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Sticky columns")]),_:1}),ee,te,l(c,null,{pug:t(()=>[e(`w-table(
:headers="table.headers"
:items="table.items"
fixed-layout
:fixed-headers="table.fixedHeaders"
style="max-width: 500px;height: 200px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-layout
  :fixed-headers="table.fixedHeaders"
  style="max-width: 500px;height: 200px">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    fixedHeaders: false,
    headers: [
      { label: 'ID', key: 'id', hidden: false, width: '60px', sticky: true },
      { label: 'First name', key: 'firstName', hidden: false, width: '120px' },
      { label: 'Last name', key: 'lastName', hidden: false, width: '120px' },
      { label: 'Birthday', key: 'birthday', email: false, width: '150px' },
      { label: 'Email', key: 'email', hidden: false, width: '200px' },
      { label: 'Phone', key: 'phone', hidden: false, width: '200px' },
      { label: 'Country', key: 'country', hidden: false, width: '200px' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', birthday: 'Feb. 12, 1976', email: 'f.sampson@gmail.com', phone: '+21 234 567 8921', country: 'United Kingdom' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', birthday: 'Dec. 15, 1995', email: 'n.lynn@gmail.com', phone: '+22 234 567 8922', country: 'Luxembourg' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', birthday: 'Apr. 25, 1989', email: 'r.bristol@gmail.com', phone: '+23 234 567 8923', country: 'Montenegro' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', birthday: 'Mar. 24, 2002', email: 'd.elliott@gmail.com', phone: '+24 234 567 8924', country: 'Germany' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', birthday: 'Aug. 2, 1990', email: 'v.carman@gmail.com', phone: '+25 234 567 8925', country: 'Ukraine' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison', birthday: 'Feb. 12, 2008', email: 'b.morison@gmail.com', phone: '+26 234 567 8926', country: 'Lithuania' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann', birthday: 'Nov. 6, 1991', email: 'b.mann@gmail.com', phone: '+27 234 567 8927', country: 'Finland' },
      { id: 8, firstName: 'Davie', lastName: 'Forester', birthday: 'Dec. 6, 1982', email: 'd.forester@gmail.com', phone: '+28 234 567 8928', country: 'Portugal' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery', birthday: 'Jan. 20, 1987', email: 'a.montgomery@gmail.com', phone: '+29 234 567 8929', country: 'Czechia' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk', birthday: 'Dec. 31, 1992', email: 'm.kirk@gmail.com', phone: '+30 234 567 8930', country: 'Norway' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory', birthday: 'Dec. 7, 1979', email: 'h.mallory@gmail.com', phone: '+31 234 567 8931', country: 'Greece' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle', birthday: 'Feb. 16, 1980', email: 's.castle@gmail.com', phone: '+32 234 567 8932', country: 'France' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason', birthday: 'Jun. 29, 2000', email: 'r.eason@gmail.com', phone: '+33 234 567 8933', country: 'Poland' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley', birthday: 'Dec. 31, 2009', email: 'm.hayley@gmail.com', phone: '+34 234 567 8934', country: 'Hungary' },
      { id: 15, firstName: 'Josie', lastName: 'Richard', birthday: 'Aug. 16, 2004', email: 'j.richard@gmail.com', phone: '+35 234 567 8935', country: 'Italy' }
    ]
  }
})
`)]),default:t(()=>[a("div",ae,[e("Sticky columns:"),l(j,{class:"ml1 mr4",modelValue:n.table9.stickyColumn,"onUpdate:modelValue":s[1]||(s[1]=d=>n.table9.stickyColumn=d),items:n.table9.stickyColumnOptions,onChange:f.toggleStickyColumn,inline:""},null,8,["modelValue","items","onChange"]),l(N,{onClick:s[2]||(s[2]=d=>n.table9.fixedHeaders=!n.table9.fixedHeaders),outline:!n.table9.fixedHeaders,round:""},{default:t(()=>[a("span",{class:w(["code",n.table9.fixedHeaders?"contrast-color":"primary"])},"fixed-headers",2)]),_:1},8,["outline"])]),l(m,{class:"base-color--bg",headers:n.table9.headers,items:n.table9.items,"fixed-layout":"","fixed-headers":n.table9.fixedHeaders,style:{"max-width":"500px",height:"200px"}},null,8,["headers","items","fixed-headers"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Sorting")]),_:1}),le,l(r,{h3:""},{default:t(()=>[e("Initial Sorting")]),_:1}),l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  v-model:sort="table.sort">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    sort: '+firstName'
  }
})`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,sort:n.table1.sort,"onUpdate:sort":s[3]||(s[3]=d=>n.table1.sort=d)},null,8,["headers","items","sort"])]),_:1}),l(x,{tip:""},{default:t(()=>[e(`By default any column being sorted is highlighted. You can modify the style of the whole column
with the class `),ne,e("."),ie,e(`
Also, if you try to target it in the devtools and can't find it, it's in `),se,e(`.
`)]),_:1}),l(r,{h3:""},{default:t(()=>[e("Asynchronous Sorting")]),_:1}),oe,l(c,{"blank-codepen":["js"]},{html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :sort-function="sortFunction"
  :loading="table.loading"
  style="height: 140px">
</w-table>`)]),js:t(()=>[e(`// This object is simulating content coming from the server.
const tableItemsInAPI = {
  null: [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '+id': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-id': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '+firstName': [
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' }
  ],
  '-firstName': [
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' }
  ],
  '+lastName': [
    { id: 3, firstName: 'Rory', lastName: 'Bristol' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' }
  ],
  '-lastName': [
    { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
    { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
    { id: 4, firstName: 'Daley', lastName: 'Elliott' },
    { id: 5, firstName: 'Virgil', lastName: 'Carman' },
    { id: 3, firstName: 'Rory', lastName: 'Bristol' }
  ]
}

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' }
      ],
      items: [
        { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
        { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
        { id: 3, firstName: 'Rory', lastName: 'Bristol' },
        { id: 4, firstName: 'Daley', lastName: 'Elliott' },
        { id: 5, firstName: 'Virgil', lastName: 'Carman' }
      ],
      loading: false
    }
  }),

  methods: {
    // For consistency, the received sortKeys parameter is always an array
    // (for multi-column sorting), whether the sorting is done on one or more columns.
    // Notice the async & await keywords.
    async sortFunction (sortKeys) {
      // Before the fetch set the loading flag, and display the progress bar in
      // the header only, so the current rows stay visible while loading.
      this.table.loading = 'header'

      // Simulating an AJAX call with 1 second latency.
      // Replace this in your app with a \`fetch\` or Axios call.
      const apiResponse = new Promise(resolve => setTimeout(() => resolve(tableItemsInAPI[sortKeys[0] || null]), 1000))

      // Fill up the array with rows from the API.
      this.table.items = await apiResponse

      this.table.loading = false
    }
  }
})

app.use(WaveUI, {})

app.mount('#app')
`)]),default:t(()=>[l(m,{class:"my6",headers:n.table10.headers,items:n.table10.items,"sort-function":f.sortFunction,loading:n.table10.loading,style:{height:"140px"}},{pug:t(()=>[e(`w-table.my6(
:headers="table.headers"
:items="table.items"
:sort-function="sortFunction"
:loading="table.loading"
style="height: 140px")`)]),_:1},8,["headers","items","sort-function","loading"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Filtering")]),_:1}),re,l(c,null,{pug:t(()=>[e(`.w-flex.wrap.mb3
  w-button.mr2.mb1(
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0")
    | No filter
  w-button.mr2.mb1(
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1")
    | Last name starting with 'M'
  w-button.mr2.mb1(
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2")
    | ID >= 10
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]")`)]),html:t(()=>[e(`<div class="w-flex wrap mb3">
  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 0"
    round
    :outline="table.activeFilter !== 0">
    No filter
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 1"
    round
    :outline="table.activeFilter !== 1">
    Last name starting with 'M'
  </w-button>

  <w-button
    class="mr2 mb1"
    @click="table.activeFilter = 2"
    round
    :outline="table.activeFilter !== 2">
    ID >= 10
  </w-button>
</div>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.filters[table.activeFilter]">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    filters: [
      null,
      item => item.lastName[0] === 'M',
      item => item.id >= 10
    ],
    activeFilter: 0
  }
})
`)]),default:t(()=>[a("div",de,[l(N,{class:"mr2 mb1",onClick:s[4]||(s[4]=d=>n.table3.activeFilter=0),round:"",outline:n.table3.activeFilter!==0},{default:t(()=>[e("No filter")]),_:1},8,["outline"]),l(N,{class:"mr2 mb1",onClick:s[5]||(s[5]=d=>n.table3.activeFilter=1),round:"",outline:n.table3.activeFilter!==1},{default:t(()=>[e("Last name starting with 'M'")]),_:1},8,["outline"]),l(N,{class:"mr2 mb1",onClick:s[6]||(s[6]=d=>n.table3.activeFilter=2),round:"",outline:n.table3.activeFilter!==2},{default:t(()=>[e("ID >= 10")]),_:1},8,["outline"])]),l(m,{headers:n.table3.headers,items:n.table3.items,filter:n.table3.filters[n.table3.activeFilter]},null,8,["headers","items","filter"])]),_:1}),l(r,{h3:""},{default:t(()=>[e("Global filter")]),_:1}),me,l(c,null,{pug:t(()=>[e(`w-input.mb3(
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search")
w-table(
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter&#40;table.keyword&#41;")`)]),html:t(()=>[e(`<w-input
  v-model="table.keyword"
  placeholder="Search anything..."
  inner-icon-left="wi-search"
  class="mb3">
</w-input>

<w-table
  :headers="table.headers"
  :items="table.items"
  :filter="table.keywordFilter(table.keyword)">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ],
    keyword: '',
    keywordFilter: keyword => item => {
      // Concatenate all the columns into a single string for a faster lookup.
      const allTheColumns = \`\${item.id} \${item.firstName} \${item.lastName}\`

      // Lookup the keyword variable in the string with case-insensitive flag.
      return new RegExp(keyword, 'i').test(allTheColumns)
    }
  }
})`)]),default:t(()=>[l(q,{class:"mb3",modelValue:n.table4.keyword,"onUpdate:modelValue":s[7]||(s[7]=d=>n.table4.keyword=d),placeholder:"Search anything...","inner-icon-left":"wi-search"},null,8,["modelValue"]),l(m,{headers:n.table4.headers,items:n.table4.items,filter:n.table4.keywordFilter(n.table4.keyword)},null,8,["headers","items","filter"])]),_:1}),l(x,{tip:""},{default:t(()=>[ce,he,be,e(`But the real power of using a regular expression
`),l(k,{class:"red mr1",size:"0.9em"},{default:t(()=>[e("mdi mdi-heart")]),_:1}),e(` in this example's match, is that the user
can benefit from the Regexp engine and use interpreted characters like `),ue,e(" etc."),fe,e(`
You could also match only the full words by replacing `),pe,e(` with
`),ye,e(" (it would return a result when typing "),Ne,e(`
but not `),ge,e(" for instance).")]),_:1}),l(r,{h2:""},{default:t(()=>[e("Loading state")]),_:1}),we,l(N,{class:"mb2",disabled:!!n.table1.loading,onClick:f.reload},{default:t(()=>[l(k,{class:"mr1"},{default:t(()=>[e("mdi mdi-sync")]),_:1}),e("reload")]),_:1},8,["disabled","onClick"]),l(r,{h3:""},{default:t(()=>[e("Simple table - no set height")]),_:1}),l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :loading="loading")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :loading="loading">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,loading:n.table1.loading},null,8,["headers","items","loading"])]),_:1}),l(r,{h3:"",slug:"loading-with-fixed-header"},{default:t(()=>[e("Table with fixed header & set height of 200px")]),_:1}),l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  :loading="loading"
  style="height: 200px">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' },
      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },
      { id: 7, firstName: 'Beckah', lastName: 'Mann' },
      { id: 8, firstName: 'Davie', lastName: 'Forester' },
      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },
      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },
      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },
      { id: 12, firstName: 'Sheree', lastName: 'Castle' },
      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },
      { id: 14, firstName: 'Maude', lastName: 'Hayley' },
      { id: 15, firstName: 'Josie', lastName: 'Richard' }
    ]
  },
  loading: true // Set this to false when the data is loaded.
}),

mounted () {
  setTimeout(() => {this.loading = false}, 3000)
}
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table3.items,"fixed-headers":"",loading:n.table1.loading,style:{height:"200px"}},null,8,["headers","items","loading"])]),_:1}),l(r,{h2:"",slug:"pagination"},{default:t(()=>[e("Pagination"),l(B,{class:"ml2 text-bold",round:"",color:"warning",outline:"",sm:""},{default:t(()=>[e("IN PROGRESS")]),_:1})]),_:1}),ke,l(C,{language:"js"},{default:t(()=>[e(`{
  itemsPerPage: Integer, // Number of rows to show per page.
  itemsPerPageOptions: Array, // Items per page options for the user.
  start: Integer, // The start of the results range.
  end: Integer, // The end of the results range.
  page: Integer, // The current page to display [itemsPerPage] number of rows.
  total: Integer // The total number of items available in the table.
}`)]),_:1}),xe,l(r,{h3:""},{default:t(()=>[e("Client-side pagination")]),_:1}),l(c,{"blank-codepen":["js"]},{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :pagination="table.pagination"
  style="max-height: 500px">
</w-table>`)]),js:t(()=>[e(`// import { faker } from '@faker-js/faker' // With npm.
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'Birthdate', key: 'birthdate' },
      ],
      items: Array(200).fill('').map((item, i) => ({
        id: i + 1,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthdate: (faker.date.birthdate()).toISOString().substring(0, 10)
      })),
      pagination: {
        itemsPerPage: 50,
        total: 200
      }
    }
  })
})

app.use(WaveUI, {
  colors: {
    primary: '#89b6d2',
    secondary: '375b6a'
  },
  theme: 'dark'
})

app.mount('#app')
`)]),default:t(()=>[l(m,{headers:n.table11.headers,items:n.table11.items,"fixed-headers":"","fixed-footer":"",pagination:n.table11.pagination,style:{"max-height":"500px"}},null,8,["headers","items","pagination"])]),_:1}),l(r,{h3:""},{default:t(()=>[e("Server-side pagination")]),_:1}),ve,l(c,{"blank-codepen":["js"]},{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="table.fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  fixed-headers
  fixed-footer
  :fetch="fetch"
  :pagination="table.pagination"
  :loading="table.loading"
  style="max-height: 500px">
</w-table>`)]),js:t(()=>[e(`// import { faker } from '@faker-js/faker' // With npm.
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'

// Generate a server-side array of objects of 2000 random persons
// that we assume will be returned paginated from our backend.
const tableItemsInApi = Array(2000).fill('').map((item, i) => ({
  id: i + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthdate: (faker.date.birthdate()).toISOString().substring(0, 10)
}))

const app = Vue.createApp({
  data: () => ({
    table: {
      headers: [
        { label: 'ID', key: 'id' },
        { label: 'First name', key: 'firstName' },
        { label: 'Last name', key: 'lastName' },
        { label: 'Birthdate', key: 'birthdate' },
      ],
      items: [], // The frontend has no data by default.
      loading: false,
      pagination: {
        itemsPerPage: 50,
        total: 200
      }
    }
  }),

  methods: {
    // All these parameters are available from Wave UI.
    fetch ({ page, start, end, total, itemsPerPage, sorting }) {
      this.table.loading = 'header' // Display the loading bar.

      // Simulating a call to the backend with a delay of 1 second.
      // Once you receive the rows from the backend assign them to the table.items var.
      setTimeout(() => {
        const itemsFromApi = tableItemsInApi.slice(0) // Clone the array before sorting.
        if (sorting.length) {
          const sortKey = sorting[0].substring(1)
          itemsFromApi.sort((a, b) => {
            if (sorting[0][0] === '+') return a[sortKey] < b[sortKey] ? -1 : 1
            else return a[sortKey] > b[sortKey] ? -1 : 1
          })
        }
        this.table.items = itemsFromApi.slice(start - 1, end)
        this.table.loading = false
      }, 1000)
    }
  }
})

app.use(WaveUI, {
  colors: {
    primary: '#89b6d2',
    secondary: '375b6a'
  },
  theme: 'dark'
})

app.mount('#app')
`)]),default:t(()=>[l(m,{headers:n.table12.headers,items:n.table12.items,"fixed-headers":"","fixed-footer":"",fetch:n.table12.fetch,pagination:n.table12.pagination,loading:n.table12.loading,style:{"max-height":"500px"}},null,8,["headers","items","fetch","pagination","loading"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Rows selection")]),_:1}),_e,Fe,l(r,{h3:"",slug:"example--selectable-rows"},{default:t(()=>[e("The "),Se,e(" prop")]),_:1}),Ie,l(r,{h3:"",slug:"example--force-selection"},{default:t(()=>[e("The "),Re,e(" prop")]),_:1}),De,l(r,{h3:"",slug:"example--row-select"},{default:t(()=>[e("The "),Ce,e(" event")]),_:1}),Le,l(c,null,{pug:t(()=>[e(`w-flex.mb4(wrap)
  w-radios.mr6(v-model="table.selectableRows" :items="selectableRowsOptions")
  w-button.my3(
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection")
    w-icon.mr2(v-if="table.forceSelection") wi-check
    | Force selection

w-table(
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event")

.mt4.title4 Selection info:
pre `+i("{{ selectionInfo }}"))]),html:t(()=>[e(`<w-flex wrap class="mb4">
  <w-radios
    v-model="table.selectableRows"
    :items="selectableRowsOptions"
    class="mr6">
  </w-radios>
  <w-button
    @click="table.forceSelection = !table.forceSelection"
    round
    :outline="!table.forceSelection"
    class="my3">
    <w-icon v-if="table.forceSelection" class="mr2">
      wi-check
    </w-icon>
    Force selection
  </w-button>
</w-flex>

<w-table
  :headers="table.headers"
  :items="table.items"
  :selectable-rows="table.selectableRows"
  :force-selection="table.forceSelection"
  @row-select="selectionInfo = $event">
</w-table>

<div class="title4 mt4">Selection info:</div>
<pre>`+i("{{ selectionInfo }}")+"</pre>")]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectableRows: true,
    forceSelection: false
  },
  selectableRowsOptions: [
    { label: '<code class="mr2">:selectable-row="false"</code> (default)', value: false },
    { label: '<code>selectable-row</code>', value: true },
    { label: '<code>:selectable-row="1"</code>', value: 1 }
  ],
  selectionInfo: {}
})
`)]),default:t(()=>[l(M,{class:"mb4",wrap:""},{default:t(()=>[l(j,{class:"mr6",modelValue:n.table1.selectableRows,"onUpdate:modelValue":s[8]||(s[8]=d=>n.table1.selectableRows=d),items:n.selectableRowsOptions},null,8,["modelValue","items"]),l(N,{class:"my3",onClick:s[9]||(s[9]=d=>n.table1.forceSelection=!n.table1.forceSelection),round:"",outline:!n.table1.forceSelection},{default:t(()=>[n.table1.forceSelection?(u(),A(k,{key:0,class:"mr2"},{default:t(()=>[e("wi-check")]),_:1})):z("",!0),e("Force selection")]),_:1},8,["outline"])]),_:1}),l(m,{headers:n.table1.headers,items:n.table1.items,"selectable-rows":n.table1.selectableRows,"force-selection":n.table1.forceSelection,onRowSelect:s[10]||(s[10]=d=>n.selectionInfo=d)},null,8,["headers","items","selectable-rows","force-selection"]),Te,a("pre",null,i(n.selectionInfo),1)]),_:1}),l(r,{h3:""},{default:t(()=>[e("Updating the selected rows programmatically")]),_:1}),Ee,l(x,{tip:""},{default:t(()=>[Me]),_:1}),l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows")
.mt4
  | Selected rows:
  code.ml2 `+i("{{ table.selectedRows }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows
  v-model:selected-rows="table.selectedRows">
</w-table>

<div class="mt4">
  Selected rows:
  <code class="ml2">`+i("{{ table.selectedRows }}")+`</code>
</div>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ],
    selectedRows: [2, 4]
  }
})`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,"selectable-rows":"","selected-rows":n.table1.selectedRows,"onUpdate:selectedRows":s[11]||(s[11]=d=>n.table1.selectedRows=d)},null,8,["headers","items","selected-rows"]),a("div",Be,[e("Selected rows:"),a("code",je,i(n.table1.selectedRows),1)])]),_:1}),l(x,{info:""},{default:t(()=>[e("In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier."),Ae,e(`
By default the expanded rows array will use an `),Ve,e(` key, if present in the item object,
or will assign an internal unique ID otherwise.
If you want, you can override the default unique ID key (when internally needed) with
the `),qe,e(` prop, which is set to "id" by default.
`)]),_:1}),l(r,{h2:"",slug:"example--expandable-rows"},{default:t(()=>[e("Expandable rows")]),_:1}),l(x,{warning:""},{default:t(()=>[e("This feature is in progress.")]),_:1}),l(c,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" expandable-rows)
  template(#row-expansion="{ item }")
    w-icon.mr2(:color="['blue', 'pink'][item.gender]")
      | mdi `+i("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    | `+i("{{ item.firstName }}")+" weighs ",1),a("strong",null,i("{{ item.weight }}")+"kg",1),e(" and is "),a("strong",null,i("{{ item.height }}")+"m",1),e(" tall.")]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  expandable-rows>
  <template #row-expansion="{ item }">
    <w-icon class="mr2" :color="['blue', 'pink'][item.gender]">
      mdi `+i("{{ ['mdi-gender-male', 'mdi-gender-female'][item.gender] }}")+`
    </w-icon>
    `+i("{{ item.firstName }}")+" weighs ",1),a("strong",null,i("{{ item.weight }}")+"kg",1),e(" and is "),a("strong",null,i("{{ item.height }}")+"m",1),e(` tall.
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson', gender: 1, weight: 56, height: 1.69 },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn', gender: 1, weight: 62, height: 1.77 },
      { id: 3, firstName: 'Rory', lastName: 'Bristol', gender: 0, weight: 71, height: 1.75 },
      { id: 4, firstName: 'Daley', lastName: 'Elliott', gender: 0, weight: 84, height: 1.83 },
      { id: 5, firstName: 'Virgil', lastName: 'Carman', gender: 0, weight: 74, height: 1.72 }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table5.headers,items:n.table5.items,"expandable-rows":""},{"row-expansion":t(({item:d})=>[l(k,{class:"mr2",color:["blue","pink"][d.gender]},{default:t(()=>[e("mdi "+i(["mdi-gender-male","mdi-gender-female"][d.gender]),1)]),_:2},1032,["color"]),e(i(d.firstName)+" weighs ",1),a("strong",null,i(d.weight)+"kg",1),e(" and is "),a("strong",null,i(d.height)+"m",1),e(" tall.")]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"slots"},{default:t(()=>[e("Headers & cells customization via slots")]),_:1}),Pe,l(r,{h3:""},{default:t(()=>[e("Headers")]),_:1}),ze,l(c,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items")
  template(#header-label="{ label, index }") `+i("{{ index }}: {{ label }}")+" \u{1F44C}")]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items">
  <template #header-label="{ label, index }">
    `+i("{{ index }}: {{ label }}")+` \u{1F44C}
  </template>
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items},{"header-label":t(({label:d,index:b})=>[e(i(b)+": "+i(d)+" \u{1F44C}",1)]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"item-cells"},{default:t(()=>[e("Item cells (inside <td> element)")]),_:1}),He,l(c,null,{pug:t(()=>[e(`w-table(:headers="table.headers" no-headers :items="table.items")
  template(#item-cell="{ item, label, header, index }")
    small.grey.mr2 `+i("{{ header.label }}")+`:
    span `+i("{{ label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  no-headers
  :items="table.items">
  <template #item-cell="{ item, label, header, index }">
    <small class="grey mr2">`+i("{{ header.label }}")+`:</small>
    <span>`+i("{{ label }}")+`</span>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,"no-headers":"",items:n.table1.items},{"item-cell":t(({item:d,label:b,header:g,index:v})=>[g.key==="id"?(u(),y("small",We,"#"+i(v),1)):(u(),y(R,{key:1},[a("small",Ke,i(g.label)+":",1),a("span",null,i(b),1)],64))]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"override-1-particular-item-cell"},{default:t(()=>[e("override 1 particular item cell or column cells (inside <td> element)")]),_:1}),Oe,l(c,null,{pug:t(()=>[e(`w-table(:headers="table.headers" :items="table.items" no-headers)
  template(#item-cell.id="{ item, label, header, index }")
    div.px2.text-center.`+i(o.$store.state.darkMode?"green-dark5--bg":"green-light5--bg")+".text-bold "+i("{{ label }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers>
  <template #item-cell.id="{ item, label, header, index }">
    <div class="px2 text-center `+i(o.$store.state.darkMode?"green-dark5--bg":"green-light5--bg")+` text-bold">
      `+i("{{ label }}")+`
    </div>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,"no-headers":""},{"item-cell.id":t(({item:d,label:b,header:g,index:v})=>[a("div",{class:w(["px2 text-center text-bold",o.$store.state.darkMode?"green-dark5--bg":"green-light5--bg"])},i(b),3)]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:"",slug:"full-custom-rows"},{default:t(()=>[e("Full custom row (<tr> element itself)")]),_:1}),Ue,l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(:class="classes" @click="select")
      td(
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`")
        | `+i("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr :class="classes" @click="select">
      <td
        v-for="(header, i) in table.headers"
        :key="i"
        :class="\`pa4 text-\${header.align || 'left'}\`">
        `+i("{{ item[header.key] || '' }}")+`
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,"selectable-rows":""},{item:t(({item:d,index:b,select:g,classes:v})=>[a("tr",{class:w(v),onClick:g},[(u(!0),y(R,null,D(n.table1.headers,(I,L)=>(u(),y("td",{key:L,class:w(`pa4 text-${I.align||"left"}`)},i(d[I.key]||""),3))),128))],10,Je)]),_:1},8,["headers","items"])]),_:1}),l(r,{h3:"",slug:"colspan-on-td"},{default:t(()=>[Ye,e(" on <td>")]),_:1}),Ge,l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows)
  template(#item="{ item, index, select, classes }")
    tr(
      :class="{ ...classes, 'indigo-`+i(o.$store.state.darkMode?"dark":"light")+"5--bg': index % 2, 'blue-"+i(o.$store.state.darkMode?"dark":"light")+`5--bg': !(index % 2) }"
      @click="select")
      td.pa2(:colspan="table.headers.length")
        .title3 Row #`+i("{{ index }}")+`
        ul
          li(v-for="(header, i) in table.headers" :key="i")
            strong.mr2 `+i("{{ header.label }}")+`:
            | `+i("{{ item[header.key] || '' }}"),1)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  no-headers
  selectable-rows>
  <template #item="{ item, index, select, classes }">
    <tr
      :class="{
        ...classes,
        'indigo-`+i(o.$store.state.darkMode?"dark":"light")+`5--bg': index % 2,
        'blue-`+i(o.$store.state.darkMode?"dark":"light")+`5--bg': !(index % 2)
      }"
      @click="select">
      <td :class="pa2" :colspan="table.headers.length">
        <div class="title3">
          Row #`+i("{{ index }}")+`
        </div>
        <ul>
          <li v-for="(header, i) in table.headers" :key="i">
            <strong class="mr2">
              `+i("{{ header.label }}")+`:
            </strong>
            `+i("{{ item[header.key] || '' }}")+`
          </li>
        </ul>
      </td>
    </tr>
  </template>
</w-table>`,1)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName' },
      { label: 'Last name', key: 'lastName' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table1.headers,items:n.table1.items,"no-headers":"","selectable-rows":""},{item:t(({item:d,index:b,select:g,classes:v})=>[a("tr",{class:w({...v,[`indigo-${o.$store.state.darkMode?"dark":"light"}5--bg`]:b%2,[`blue-${o.$store.state.darkMode?"dark":"light"}5--bg`]:!(b%2)}),onClick:g},[a("td",{class:"pa2",colspan:n.table1.headers.length},[a("div",Ze,"Row #"+i(b),1),a("ul",null,[(u(!0),y(R,null,D(n.table1.headers,(I,L)=>(u(),y("li",{key:L},[a("strong",$e,i(I.label)+":",1),e(i(d[I.key]||""),1)]))),128))])],8,Qe)],10,Xe)]),_:1},8,["headers","items"])]),_:1}),l(r,{h2:""},{default:t(()=>[e("Responsiveness & mobile layout")]),_:1}),et,l(c,null,{pug:t(()=>[e(`w-table(
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700")`)]),html:t(()=>[e(`<w-table
  :headers="table.headers"
  :items="table.items"
  :mobile-breakpoint="700">
</w-table>`)]),js:t(()=>[e(`data: () => ({
  table: {
    headers: [
      { label: 'ID', key: 'id' },
      { label: 'First name', key: 'firstName', align: 'center' },
      { label: 'Last name', key: 'lastName', align: 'right' }
    ],
    items: [
      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },
      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },
      { id: 3, firstName: 'Rory', lastName: 'Bristol' },
      { id: 4, firstName: 'Daley', lastName: 'Elliott' },
      { id: 5, firstName: 'Virgil', lastName: 'Carman' }
    ]
  }
})
`)]),default:t(()=>[l(m,{headers:n.table2.headers,items:n.table2.items,"mobile-breakpoint":700},null,8,["headers","items"])]),_:1}),l(x,{tip:""},{default:t(()=>[tt,l(C,{class:"mt5 mb0",language:"css",label:"CSS",dark:o.$store.state.darkMode},{default:t(()=>[e(".w-table--mobile .w-table__cell:before {width: 8em;}")]),_:1},8,["dark"])]),_:1})])}const _=[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}],lt={null:[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"}],"+id":[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"}],"-id":[{id:5,firstName:"Virgil",lastName:"Carman"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"}],"+firstName":[{id:4,firstName:"Daley",lastName:"Elliott"},{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:5,firstName:"Virgil",lastName:"Carman"}],"-firstName":[{id:5,firstName:"Virgil",lastName:"Carman"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"},{id:4,firstName:"Daley",lastName:"Elliott"}],"+lastName":[{id:3,firstName:"Rory",lastName:"Bristol"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:1,firstName:"Floretta",lastName:"Sampson"}],"-lastName":[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:3,firstName:"Rory",lastName:"Bristol"}]},nt=Array(2e3).fill("").map((o,s)=>({id:s+1,firstName:F.person.firstName(),lastName:F.person.lastName(),birthdate:F.date.birthdate().toISOString().substring(0,10)})),it={data(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:_.slice(0,5),sort:"+firstName",loading:!0,selectableRows:!0,selectedRows:[2,4],forceSelection:!1},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:_.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:_,filters:[null,o=>o.lastName[0]==="M",o=>o.id>=10],activeFilter:0,fixedFooter:!1},table4:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:_,keyword:"",keywordFilter:o=>s=>{const p=`${s.id} ${s.firstName} ${s.lastName}`;return new RegExp(o,"i").test(p)}},table5:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",gender:1,weight:56,height:1.69},{id:2,firstName:"Nellie",lastName:"Lynn",gender:1,weight:62,height:1.77},{id:3,firstName:"Rory",lastName:"Bristol",gender:0,weight:71,height:1.75},{id:4,firstName:"Daley",lastName:"Elliott",gender:0,weight:84,height:1.83},{id:5,firstName:"Virgil",lastName:"Carman",gender:0,weight:74,height:1.72}]},table6:{headers:[{label:"ID",key:"id",hidden:!1},{label:"First name",key:"firstName",hidden:!1},{label:"Last name",key:"lastName",hidden:!1}],items:_.slice(0,5)},table7:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table8:{headers:[{label:"ID",key:"id",width:"50"},{label:"Content",key:"content",width:"70%"},{label:"First name",key:"firstName"}],items:[{id:1,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Floretta"},{id:2,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Nellie"},{id:3,content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eaque tempore! Ipsum vitae deleniti recusandae, aliquam sequi asperiores, explicabo obcaecati aperiam ratione voluptates possimus assumenda commodi eum quia facere reprehenderit.",firstName:"Rory"}]},table9:{stickyColumn:1,fixedHeaders:!1,stickyColumnOptions:[{value:1,label:"#1"},{value:2,label:"#2"},{value:24,label:"#2 & #4"},{value:0,label:"None"}],headers:[{label:"ID",key:"id",hidden:!1,width:"60px",sticky:!0},{label:"First name",key:"firstName",hidden:!1,width:"120px"},{label:"Last name",key:"lastName",hidden:!1,width:"120px"},{label:"Birthday",key:"birthday",email:!1,width:"150px"},{label:"Email",key:"email",hidden:!1,width:"200px"},{label:"Phone",key:"phone",hidden:!1,width:"200px"},{label:"Country",key:"country",hidden:!1,width:"200px"}],items:[{id:1,firstName:"Floretta",lastName:"Sampson",birthday:"Feb. 12, 1976",email:"f.sampson@gmail.com",phone:"+21 234 567 8921",country:"United Kingdom"},{id:2,firstName:"Nellie",lastName:"Lynn",birthday:"Dec. 15, 1995",email:"n.lynn@gmail.com",phone:"+22 234 567 8922",country:"Luxembourg"},{id:3,firstName:"Rory",lastName:"Bristol",birthday:"Apr. 25, 1989",email:"r.bristol@gmail.com",phone:"+23 234 567 8923",country:"Montenegro"},{id:4,firstName:"Daley",lastName:"Elliott",birthday:"Mar. 24, 2002",email:"d.elliott@gmail.com",phone:"+24 234 567 8924",country:"Germany"},{id:5,firstName:"Virgil",lastName:"Carman",birthday:"Aug. 2, 1990",email:"v.carman@gmail.com",phone:"+25 234 567 8925",country:"Ukraine"},{id:6,firstName:"Baldwin",lastName:"Morison",birthday:"Feb. 12, 2008",email:"b.morison@gmail.com",phone:"+26 234 567 8926",country:"Lithuania"},{id:7,firstName:"Beckah",lastName:"Mann",birthday:"Nov. 6, 1991",email:"b.mann@gmail.com",phone:"+27 234 567 8927",country:"Finland"},{id:8,firstName:"Davie",lastName:"Forester",birthday:"Dec. 6, 1982",email:"d.forester@gmail.com",phone:"+28 234 567 8928",country:"Portugal"},{id:9,firstName:"Andi",lastName:"Montgomery",birthday:"Jan. 20, 1987",email:"a.montgomery@gmail.com",phone:"+29 234 567 8929",country:"Czechia"},{id:10,firstName:"Magnolia",lastName:"Kirk",birthday:"Dec. 31, 1992",email:"m.kirk@gmail.com",phone:"+30 234 567 8930",country:"Norway"},{id:11,firstName:"Hamilton",lastName:"Mallory",birthday:"Dec. 7, 1979",email:"h.mallory@gmail.com",phone:"+31 234 567 8931",country:"Greece"},{id:12,firstName:"Sheree",lastName:"Castle",birthday:"Feb. 16, 1980",email:"s.castle@gmail.com",phone:"+32 234 567 8932",country:"France"},{id:13,firstName:"Rebekah",lastName:"Eason",birthday:"Jun. 29, 2000",email:"r.eason@gmail.com",phone:"+33 234 567 8933",country:"Poland"},{id:14,firstName:"Maude",lastName:"Hayley",birthday:"Dec. 31, 2009",email:"m.hayley@gmail.com",phone:"+34 234 567 8934",country:"Hungary"},{id:15,firstName:"Josie",lastName:"Richard",birthday:"Aug. 16, 2004",email:"j.richard@gmail.com",phone:"+35 234 567 8935",country:"Italy"}]},table10:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:_.slice(0,5),loading:!1},table11:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"},{label:"Birthdate",key:"birthdate"}],items:Array(200).fill("").map((o,s)=>({id:s+1,firstName:F.person.firstName(),lastName:F.person.lastName(),birthdate:F.date.birthdate().toISOString().substring(0,10)})),pagination:{itemsPerPage:50,total:200}},table12:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"},{label:"Birthdate",key:"birthdate"}],items:[],loading:!1,pagination:{itemsPerPage:50,total:2e3},fetch:({page:o,start:s,end:p,total:S,itemsPerPage:n,sorting:f})=>{this.table12.loading="header",setTimeout(()=>{const r=nt.slice(0);if(f.length){const m=f[0].substring(1);r.sort((c,N)=>f[0][0]==="+"?c[m]<N[m]?-1:1:c[m]>N[m]?-1:1)}this.table12.items=r.slice(s-1,p),this.table12.loading=!1},1e3)}},selectableRowsOptions:[{label:'<code class="mr2">:selectable-row="false"</code> (default)',value:!1},{label:"<code>selectable-row</code>",value:!0},{label:'<code>:selectable-row="1"</code>',value:1}],selectionInfo:{}}},methods:{reload(){this.table1.loading=!0,setTimeout(()=>this.table1.loading=!1,2e3)},hideColumn(o){this.table6.headers[o].hidden=!this.table6.headers[o].hidden},onColumnResize({index:o,widths:s}){s.forEach((p,S)=>this.table8.headers[S].width=p),localStorage.tableWidths=s},addRow(){this.table3.items.push({id:this.table3.items.length+1,firstName:"John",lastName:"Doe"}),this.$nextTick(()=>{const o=this.$refs.table.$el;o.scrollTo({top:o.scrollHeight,behavior:"smooth"})})},toggleStickyColumn(){switch(this.table9.headers.forEach(o=>o.sticky=!1),this.table9.stickyColumn){case 1:return this.table9.headers[0].sticky=!0;case 2:return this.table9.headers[1].sticky=!0;case 24:return this.table9.headers[1].sticky=!0,this.table9.headers[3].sticky=!0}},async sortFunction(o){this.table10.loading="header";const s=new Promise(p=>setTimeout(()=>p(lt[o[0]||null]),1e3));this.table10.items=await s,this.table10.loading=!1}},mounted(){var o;this.reload(),(o=localStorage.tableWidths)==null||o.split(",").forEach((s,p)=>this.table8.headers[p].width=s)}},st=E(it,[["render",at]]),ot=a("div",{class:"w-divider my12"},null,-1);function rt(o,s,p,S,n,f){const r=h("title-link"),m=h("component-api");return u(),y("div",null,[ot,l(r,{class:"title1",h2:""},{default:t(()=>[e("API")]),_:1}),l(m,{class:"mt0",items:f.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(m,{items:o.slots,title:"Slots"},null,8,["items"]),l(m,{items:f.events,title:"Events"},null,8,["items"])])}const dt={items:"An array of objects that defines the table data.<br>Each item object should have all the same keys as defined in the headers.<br>If needed, you can also add any custom property.</li></ul>",headers:'An array of objects that defines the columns of the table. The headers are always required, even when hidden.<br>Each header object can have these properties:<ul><li><strong class="code">label:</strong> <span class="types teal">[String]</span> The label to display as the column header.</li><li><strong class="code">key:</strong> <span class="w-tag text-upper red size--sm w-tag--outline">required</span> <span class="types teal">[String]</span> A unique identifier that should be found in each row object, and that will be used for sorting.</li><li><strong class="code">align:</strong> <span class="types teal">[String]</span> align the text to the left, right or center for the whole column.</li><li><strong class="code">width:</strong> <span class="types teal">[String, Integer]</span> Defines the width of the column in pixel if no unit is given, or in the unit you want (E.g. <code>30</code>, <code>30px</code>, <code>2em</code>, <code>20%</code>, etc.)</li><li><strong class="code">sortable:</strong> <span class="types teal">[Boolean]</span> Whether this column is sortable or not. If omitted, defaults to <code>true</code>.</li><li>If needed, you can also add any custom property.</li></ul>',noHeaders:"The table headings will be hidden. Only the table data will be visible.",fixedHeaders:"When set to <code>true</code>, the table headings will be sticky at the top of the table when scrolling down.",fixedFooter:"When set to <code>true</code>, the table footer will be sticky at the bottom of the table when scrolling up or when the content is taller than the table container.",fixedLayout:"When set to <code>true</code>, the table layout is set to fixed (<code>table-layout: fixed</code>), which means the table cells won't try to adapt their width to the available space and wrap the content when it does not fit.<br>This layout is used when there are sticky columns or column resizing enabled.",loading:"When set to <code>true</code>, a progress bar will be displayed and any currently visible rows will be hidden.<br>When set to <code>'header', the loading bar will be placed in the header leaving any current rows visible while loading.",sort:'Sort the rows of the array by the given key. You can prefix the key with a <code>+</code> or a <code>-</code> to apply an ascending or descending sorting. E.g. <code>+id</code>.<br>You can also use a 2-way binding to keep the <code>sort</code> variable updated in your app (outside of Wave UI): use <code>:sort.sync="sort"</code> in Vue 2,or the <code>v-model:sort="sort"</code> in Vue 3.',sortFunction:"Optionally provide an asynchronous sorting function (usually for server-side sorting). This function receives an array of sorting keys as parameter. If the array is empty, the sorting is reset.",expandableRows:"Activate or deactivate the expandable rows feature.<br>When set to <code>true</code>, a click on a row will expand some details for this record on a next row.",expandedRows:"Expand some rows by default, on table load. You can provide the rows to expand in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",selectableRows:"Activate or deactivate the selectable rows feature.<br>When set to <code>true</code>, a click on a row will set it to activated and a <code>.w-table__row--selected</code> CSS class will be applied to highlight the row. You can use the CSS class to change the highlight color or style.",selectedRows:"Select some rows by default, on table load. You can provide the rows to select in an array of <code>id</code>. If you prefer another key than <code>id</code>, you can use the <code>uid-key</code> prop to set another key.",forceSelection:"Prevent unselecting a row when only one remains selected.",uidKey:"In order to keep the same row selected after sorting or filtering, each row is assigned a unique identifier.<br>By default the expanded rows array will use an <code>id</code> key, if present in the item object, or will assign an internal unique ID otherwise.<br>If you want, you can override the default unique ID key (when internally needed) with this prop.",filter:"An external filter function that you can provide to filter the rows of the table.<br>The function receives 2 parameters:<ul><li><strong>Param 1:</strong> the <strong>item</strong> object being traversed by the filter.</li><li><strong>Param 2:</strong> the <strong>index</strong> of the item being traversed by the filter.</li></ul>",mobileBreakpoint:"When a number is given (in pixel), any device screen width under this number will display the table in mobile layout. Leave undefined to disable.",resizableColumns:"When this option is on, the columns will be separated by borders that you can drag to resize.",pagination:'The pagination is a two-way binding object. It is always containing up-to-date properties that you can use for pagination.<br>You can also modify any property inside it and the table will re-paginate and update. This is particularly useful when the pagination is done server-side.<br>Here is the list of all the properties it contains:<ul><li><span class="teal code">{Integer}</span><code>itemsPerPage:</code><p>the number of rows to display in one page. <code>0</code> for "all" results in 1 page.</p></li><li><span class="teal code">{Array}</span><code>itemsPerPageOptions:</code><p>The <code>itemsPerPage</code> options to offer to the user. Each object of the array should have at least a <code>value</code> property, and a <code>label</code> property if different of the <code>value</code>.</p></li><li><span class="teal code">{Number}</span><code>start:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>start</code> is the first result number to load [itemsPerPage] results from.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>end:</code><p><code>start</code> &amp; <code>end</code> are integers defining the range of results to load. E.g. <code>51 - 100</code>.<br><code>end</code> is the last result number to load.<br> <code>start</code> &amp; <code>end</code> can be used instead of <code>page</code> if you find it more convenient.</p><p class="bold-text"><strong>Warning:</strong> when the pagination is done server-side, you should subtract <code>1</code> to the start and end in order to query the database. E.g: start = 51, end = 100, you should query the database rows 50 to 99 (in order to display ranges starting from 1 and not zero to the end user).</p></li><li><span class="teal code">{Number}</span><code>page:</code><p>An integer - to be used in conjunction with the <code>itemsPerPage</code> option - to define the range of results to load. E.g. page = 2 and itemsPerPage = 50, will load the results range [51-100].<br> This can be used instead of <code>start</code> and <code>end</code> if you find it more convenient.</p></li><li><span class="teal code">{Number}</span><code>total:</code><p>An integer defining the total number of items available in this match.</p></li></ul>'},mt={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template for each full &lt;tr&gt;.",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1.",select:"When using <code>selectable-rows</code>: the select function to call on &lt;tr&gt; click (or on a custom event).",classes:"The internally computed CSS classes to apply to this &lt;tr&gt;. Given as an object."}},"item-cell":{description:"Provide a custom item cell template (each &lt;td&gt; of each item row).",params:{item:"The full item object of the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}},"row-expansion":{description:"Provide a custom template for the row expansions (to display in an expanded row).",params:{item:"The full item object of the row being rendered.",index:"The index of the row being rendered. Starts at 1."}},footer:{description:"Provide a custom template for the table footer if you want one.<br>All the cells are merged in one for convenience, but if you need all the cells, you can use the <code>footer-row</code> slot."},"footer-row":{description:"Provide a custom template for the table footer if you want one.<br>This slot lets you control the whole &lt;tr&gt;. It expects to receive a &lt;tr&gt; element containing &lt;td&gt;s or &lt;th&gt;s."}},ct={"row-click":{description:"",params:{item:"The associated row item object.",index:"The index of the row being clicked (starts at 0) in the current filtering state."}},"row-select":{description:"<strong>This event fires on both selecting and unselecting a row</strong> (so you need only one listener for both), and a boolean is returned to know the selected state.",params:{item:"The associated row item object.",index:"The index of the row being selected (starts at 0) in the current filtering state.",selected:"A boolean representing the selected state of the clicked row.",selectedRows:"An array containing all the expanded rows objects."}},"row-expand":{description:"<strong>This event fires on both expanding and collapsing a row</strong> (so you need only one listener for both), and a boolean is returned to know the expanded state.",params:{item:"The associated row item object.",index:"The index of the row being expanded (starts at 0) in the current filtering state.",expanded:"A boolean representing the expanded state of the clicked row.",expandedRows:"An array containing all the expanded rows objects."}},"update:sort":{description:"Emitted every time the sorting string is updated by a user interaction.",params:{"[String]":"The currently applied sorting on the table rows. E.g. <code>+firstName</code>"}},"update:selected-rows":{description:"Emitted every time the selected-rows array changes. To be used with <code>:selected-rows.sync</code> in Vue 2 or <code>v-model:selected-rows</code> in Vue 3.",params:{"[Array]":"The current array of selected rows."}},"update:expanded-rows":{description:"Emitted every time the expanded-rows array changes. To be used with <code>:expanded-rows.sync</code> in Vue 2 or <code>v-model:expanded-rows</code> in Vue 3.",params:{"[Array]":"The current array of expanded rows."}},"column-resize":{description:"Emitted on mouseup after a column has been resized.",params:{index:"The index (starting from 0) of the resizer that was moved (also the index of the column on the left of the resizer).",widths:"An array containing all the new widths of the columns after resizing."}}},ht={data:()=>({propsDescs:dt,slots:mt}),computed:{props(){return V.props},events(){return V.emits.reduce((o,s)=>(o[s]=ct[s]||{})&&o,{})}}},bt=E(ht,[["render",rt]]);function ut(o,s,p,S,n,f){const r=h("ui-component-title"),m=h("examples"),c=h("api");return u(),y("main",null,[l(r,null,{default:t(()=>[e("w-table")]),_:1}),l(m),l(c)])}const ft={components:{Examples:st,Api:bt}},Nt=E(ft,[["render",ut]]);export{Nt as default};
