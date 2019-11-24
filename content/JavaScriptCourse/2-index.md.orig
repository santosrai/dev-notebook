---
title: "Javascript Custom Functions"
metaTitle: "Learning Javascript"
metaDescription: "Learning Javascript"
---

### Converting all values from table into dictionary object with heading as header

```html
<div class="card">
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Editable table</h3>
    <div class="card-body">
      <div id="table" class="table-editable">
        <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
              class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
              <span class="table-add"><button>Add Table</button></span>
              <span id="export-btn"><button >Export</button></span>
              <table class="table table-bordered table-responsive-md table-striped text-center">
          <thead>
            <tr>
              <th class="text-center">Type</th>
              <th class="text-center">Length</th>
              <th class="text-center">Started</th>
              <th class="text-center">Ended</th>
              <th class="text-center">Setting</th>
              <!-- <th class="text-center">Remove</th> -->
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="pt-3-half" contenteditable="true">Working</td>
              <td class="pt-3-half" contenteditable="true">25</td>
              <td class="pt-3-half" contenteditable="true">2019-08-23 15:30:00</td>
              <td class="pt-3-half" contenteditable="true">2019-08-23 15:55:00</td>
              <td>
                <span class="table-remove"><i type="button"
                  class="material-icons white-text red">clear</i></span>
              <span class="table-up"><i type="button"
                    class="material-icons">vertical_align_top</i></span>
              <span class="table-down"><i type="button"
                      class="material-icons">vertical_align_bottom</i></span>
              </td>
              
            </tr>
            <!-- This is our clonable table line -->
            <tr>
              <td class="pt-3-half" contenteditable="true">Working</td>
              <td class="pt-3-half" contenteditable="true">25</td>
              <td class="pt-3-half" contenteditable="true">2019-08-23 17:30:00</td>
              <td class="pt-3-half" contenteditable="true">2019-08-23 17:55:00</td>
              <td>
                <span class="table-remove"><i type="button"
                    class="material-icons">clear</i></span>
                <span class="table-up"><i type="button"
                      class="material-icons">vertical_align_top</i></span>
                <span class="table-down"><i type="button"
                        class="material-icons">vertical_align_bottom</i></span>
                  </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  </div>

  ```
  ```javascript

 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

  // A few jQuery helpers for exporting only
 jQuery.fn.pop = [].pop;
 jQuery.fn.shift = [].shift;

 $BTN.on('click', () => {

   const $rows = $tableID.find('tr:not(:hidden)');
   const headers = [];
   const data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {
       
     headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
     const $td = $(this).find('td');
     const h = {};

     // Use the headers from earlier to name our hash keys
     headers.forEach((header, i) => {

       h[header] = $td.eq(i).text();
     });

     data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
 });
  ```

