// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function click(e) {
//   chrome.tabs.executeScript(null,
    // //   {code:"document.body.style.backgroundColor='" + e.target.id + "'"}
    //   {code:"document.getElementById('login-button').click();"});
    // // {code:" window.location.href = 'https://www38.polyu.edu.hk/eStudent/secure/my-subject-registration/subject-register-select-acad-year-sem.jsf';\
    // //         var box1 = document.getElementById('mainForm:yearSemDropDown'); \
    // //         box1.value = 1495;\
    // //         document.getElementById('mainForm:nextButton').click();\
    // //   "});

    // chrome.tabs.executeScript(null,
    //       {code:"window.location.href = 'https://www38.polyu.edu.hk/eStudent/secure/my-subject-registration/subject-register-select-acad-year-sem.jsf';"});
    
    chrome.tabs.executeScript({
        file: 'simulate.js'
    });  
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});