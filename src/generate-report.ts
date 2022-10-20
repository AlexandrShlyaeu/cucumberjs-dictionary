import path from 'path';

import _ from 'lodash';

import modulePackage from '../package.json';

export default function (stepDefinitions) {
  const groupedStepDefintions = _.groupBy(stepDefinitions, 'file');
  const title = 'Step Dictionary';
  const cssFiles = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'];
  const jsImports = ['https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js'];

  const cssBlock = cssFiles
    .map(location => {
      return `<link rel="stylesheet" type="text/css" href="${location}">`;
    })
    .join('\n');

  const jsBlock = jsImports
    .map(location => {
      return `<script src="${location}"></script>`;
    })
    .join('\n');

  const inlineCSS = `
    #filter {
      width: 100%;
      font-size: 18pt;
      padding: 10px;
      background-color: #F0F0F0;
      border: 1px solid #CCC;
      color: #0088B5;
    }
    .filename-header {
      font-size: 13pt;
    }
    .step-defintion {
      padding: 20px 5px;
    }
    .label {
      color: #000;
    }
    .form-group, .controls, .footer {
      padding: 20px 0;
    }
    .fileToggleButton {
      float: left;
      position: relative;
      margin-right: 10px;
      border: 1px solid #CCC;
      background-color: #FFF;
      font-size: 8pt;
      color: #AAA;
    }
    .fileToggleButton:hover {
      border: 1px solid #777;
      color: #333;
    }
    .footer {
      font-size: 10pt;
    }
  `;

  const header = `
    <h1> Step Dictionary </h1>
    <div class="form-group">
      <label for="filter">Search by phrase</label>
      <input type="text" id="filter" placeholder="">
    </div>
  `;

  let filesBlock = '';
  _.forIn(groupedStepDefintions, (steps, file) => {
    const stepsBlock = steps
      .map(step => {
        return `
        <dl class="dl-horizontal step-definition" regex="${encodeURIComponent(step.regex)}">
          <dt>Regex</dt>
          <dd>${step.regex}</dd>
          <dt>Keyword</dt>
          <dd>${step.keyword}</dd>
          <dt>Parameters</dt>
          <dd>${step.params}</dd>
          <dt>URI</dt>
          <dd>${path.basename(file)}:${step.line}</dd>
          <dt>Example</dt>
          <dd>${step.example}</dd>
        </dl>
      `;
      })
      .join(' ');
    filesBlock += `
      <div class="file-block">
        <input type="button" class="fileToggleButton" onClick="toggleDefinitions(this)" value="Toggle">
        <p class="filename-header">
          ${path.relative(process.cwd(), file)}
        </p>
        <div class="definitions">
          ${stepsBlock}
        </div>
      </div>
    `;
  });

  const filterScript = `
    <script>
      $('#filter').bind('propertychange change click keyup input paste', function(e) {
        var newValue = e.currentTarget.value;
        $('.step-definition').each(function(elem) {
          var regexString = decodeURIComponent(this.getAttribute('regex'));
          var searchFilter = newValue.replace(/ +/g, \'.*\').replace(/\".*\"/, '\".*\"');
          var matchDefinition = new RegExp(searchFilter);
          if (!matchDefinition.test(regexString)) {
            this.style.display = 'none';
          } else {
            this.style.display = 'block';
          }
        });
        $('.file-block').each(function() {
          var noneFound = true;
          $(this).find('.step-definition').each(function() {
            var regexString = decodeURIComponent(this.getAttribute('regex'));
            var searchFilter = newValue.replace(/ +/g, \'.*\').replace(/\".*\"/, '\".*\"');
            var matchDefinition = new RegExp(searchFilter);
            if (!matchDefinition.test(regexString)) {
              this.style.display = 'none';
            } else {
              noneFound = false;
              this.style.display = 'block';
            }
          });
          console.log('nf: ' + noneFound);
          if (noneFound) {
            this.style.display = 'none';
          } else {
            this.style.display = 'block';
          }
        });
      });
    </script>
  `;

  const toggleScripts = `
    <script>
      function toggleDefinitions(elem) {
        var definitions = $(elem).siblings()[1];
        $(definitions).toggle();
      }
      function toggleAll(action) {
        if (action === 'collapse') {
          $('.definitions').css('display', 'none');
          $('#toggleAll').text('Show All');
          $('#toggleAll').attr("href", "javascript:toggleAll('show')");
        } else {
          $('.definitions').css('display', 'block');
          $('#toggleAll').text('Collapse All');
          $('#toggleAll').attr("href", "javascript:toggleAll('collapse')");
        }
      }
    </script>
  `;

  const mainBody = `
    <div class="controls">
      Available step definitions (${stepDefinitions.length}):
      <a href="javascript:toggleAll('collapse')" id="toggleAll"> Collapse All </a>
    </div>
    ${filesBlock}
    ${filterScript}
    ${toggleScripts}
  `;

  const footer = `
    <div class="footer">
      This report was generated by the template defined in step-dictionary@${modulePackage.version}
    </div>
  `;

  return `
    <html>
      <head>
        <title>
          ${title}
        </title>
        ${cssBlock}
        ${jsBlock}
        <style>
          ${inlineCSS}
        </style>
      </head>
      <body>
        <div class="container">
          ${header}
          ${mainBody}
          ${footer}
        </div>
      </body>
    </html>
  `;
}
