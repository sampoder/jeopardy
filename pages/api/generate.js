// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  res.statusCode = 200;
  const dataset = await fetch("http://localhost:3000/example.json").then((r) =>
    r.json()
  );
  let totalLength = 9999
  dataset.sets.map(
    ({name, questions}) =>{
      console.log(questions.length)
      if (totalLength > questions.length){
        totalLength = questions.length
      }
    }
  )
  console.log(totalLength);
  res.send(`<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="utf-8" />
  
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
  
      <title>Jeopardy</title>
      <meta
        name="description"
        content="Defines the number of pixels of space between a cell’s contents and the cell wall. , are useful when you want to arrange text and images in order to make the information straightforward and clear to the Web page visitor.
  , A heading cell displays text as bold and ____., There are ____ main HTML tags used to create a table."
      />
      <meta name="ROBOTS" content="NOODP" />
      <meta
        name="google-site-verification"
        content="UYS7arlGlbDobqQSsucWwkbZyiC-6_cCWlUn9Eb5b2M"
      />
      <link
        rel="shortcut icon"
        href="/static/1601833824/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="/static/1601833824/favicon.ico"
        type="image/x-icon"
      />
  
      <base href="https://jeopardylabs.com" />
  
      <style type="text/css">
        /*!
   * Bootstrap Reboot v4.0.0-beta.2 (https://getbootstrap.com)
   * Copyright 2011-2017 The Bootstrap Authors
   * Copyright 2011-2017 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
   */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
  
        html {
          font-family: sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: transparent;
        }
  
        @-ms-viewport {
          width: device-width;
        }
  
        article,
        aside,
        dialog,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section {
          display: block;
        }
  
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #fff;
        }
  
        [tabindex="-1"]:focus {
          outline: 0 !important;
        }
  
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
  
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
  
        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }
  
        abbr[title],
        abbr[data-original-title] {
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
          cursor: help;
          border-bottom: 0;
        }
  
        address {
          margin-bottom: 1rem;
          font-style: normal;
          line-height: inherit;
        }
  
        ol,
        ul,
        dl {
          margin-top: 0;
          margin-bottom: 1rem;
        }
  
        ol ol,
        ul ul,
        ol ul,
        ul ol {
          margin-bottom: 0;
        }
  
        dt {
          font-weight: 700;
        }
  
        dd {
          margin-bottom: 0.5rem;
          margin-left: 0;
        }
  
        blockquote {
          margin: 0 0 1rem;
        }
  
        dfn {
          font-style: italic;
        }
  
        b,
        strong {
          font-weight: bolder;
        }
  
        small {
          font-size: 80%;
        }
  
        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }
  
        sub {
          bottom: -0.25em;
        }
  
        sup {
          top: -0.5em;
        }
  
        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
  
        a:hover {
          color: #0056b3;
          text-decoration: underline;
        }
  
        a:not([href]):not([tabindex]) {
          color: inherit;
          text-decoration: none;
        }
  
        a:not([href]):not([tabindex]):focus,
        a:not([href]):not([tabindex]):hover {
          color: inherit;
          text-decoration: none;
        }
  
        a:not([href]):not([tabindex]):focus {
          outline: 0;
        }
  
        pre,
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
  
        pre {
          margin-top: 0;
          margin-bottom: 1rem;
          overflow: auto;
          -ms-overflow-style: scrollbar;
        }
  
        figure {
          margin: 0 0 1rem;
        }
  
        img {
          vertical-align: middle;
          border-style: none;
        }
  
        svg:not(:root) {
          overflow: hidden;
        }
  
        a,
        area,
        button,
        [role="button"],
        input:not([type="range"]),
        label,
        select,
        summary,
        textarea {
          -ms-touch-action: manipulation;
          touch-action: manipulation;
        }
  
        table {
          border-collapse: collapse;
        }
  
        caption {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          color: #868e96;
          text-align: left;
          caption-side: bottom;
        }
  
        th {
          text-align: inherit;
        }
  
        label {
          display: inline-block;
          margin-bottom: 0.5rem;
        }
  
        button {
          border-radius: 0;
        }
  
        button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
        }
  
        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
  
        button,
        input {
          overflow: visible;
        }
  
        button,
        select {
          text-transform: none;
        }
  
        button,
        html [type="button"],
        [type="reset"],
        [type="submit"] {
          -webkit-appearance: button;
        }
  
        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }
  
        input[type="radio"],
        input[type="checkbox"] {
          box-sizing: border-box;
          padding: 0;
        }
  
        input[type="date"],
        input[type="time"],
        input[type="datetime-local"],
        input[type="month"] {
          -webkit-appearance: listbox;
        }
  
        textarea {
          overflow: auto;
          resize: vertical;
        }
  
        fieldset {
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
        }
  
        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          line-height: inherit;
          color: inherit;
          white-space: normal;
        }
  
        progress {
          vertical-align: baseline;
        }
  
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }
  
        [type="search"] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }
  
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }
  
        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }
  
        output {
          display: inline-block;
        }
  
        summary {
          display: list-item;
        }
  
        template {
          display: none;
        }
  
        [hidden] {
          display: none !important;
        }
        /*# sourceMappingURL=bootstrap-reboot.css.map */
      </style>
  
      <style type="text/css">
        html,
        body {
          overflow: hidden;
        }
  
        body {
          background-color: #2a3698;
          height: 100%;
          font-family: Verdana, Arial, Helvetica, sans-serif;
          overflow-y: hidden;
        }
  
        * {
          box-sizing: border-box;
        }
  
        input,
        textarea,
        select {
          display: block;
          font-family: Verdana, Arial, Helvetica, sans-serif;
          margin: auto;
        }
  
        .hide {
          display: none;
        }
  
        h3 {
          font-size: 20px;
        }
  
        h3,
        .point-cell {
          color: #ffff5f;
          color: #fff;
          text-align: center;
          font-weight: bold;
        }
  
        .modal-wrapper {
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          height: 100%; /* stupid safari */
        }
  
        .modal {
          position: relative;
          top: 50%;
          /*left:50%;*/
          /*right:5%;*/
          transform: translate(0%, -50%);
          background-color: #ffffff;
          z-index: 2;
          border-radius: 5px;
          background-color: #efefef;
          overflow: auto;
          max-height: calc(100% - 50px);
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
  
        #teams {
          position: absolute;
          bottom: 0;
          text-align: center;
          left: 0;
          right: 0;
          z-index: 11;
          display: flex;
          /*display:none;*/
          /*
      align-items:baseline;
      justify-content:space-around;*/
        }
  
        #teams .team {
          display: inline-block;
          margin-left: 10px;
          margin-right: 10px;
          border: 1px solid white;
          padding: 5px;
          background-color: white;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
          /*min-width:100px;*/
        }
  
        #teams .team:first-of-type {
          margin-left: 50px;
        }
  
        #teams .team:last-of-type {
          margin-right: 50px;
        }
  
        #teams h3.name {
          border-bottom: 2px solid black;
          text-align: center;
          color: black;
          display: inline-block;
          white-space: nowrap;
        }
  
        #teams h3.points {
          background-color: #2a3698;
          color: #fff;
        }
  
        .pointer span {
          display: inline-block;
          width: 45%;
          color: white;
          font-size: 30px;
          line-height: 30px;
          cursor: pointer;
          background-color: white;
          font-family: monospace;
          font-weight: bold;
        }
  
        .pointer .plus {
          color: #2da94e;
        }
  
        .pointer .minus {
          color: #ff0000;
        }
  
        #gameplay {
          filter: blur(5px);
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
  
        #menu-links {
          font-size: 20px;
          margin-top: 20px;
        }
  
        #fullscreen {
          margin-top: 20px;
        }
  
        #options select {
          font-size: 22px;
          display: inline-block;
          height: 40px;
          -webkit-appearance: menulist-button;
        }
  
        #options input[type="button"] {
          font-size: 22px;
          display: inline;
          height: 40px;
        }
  
        #options a {
          color: white;
          text-decoration: underline;
        }
  
        #options a:hover {
          text-decoration: none;
        }
  
        #reset-all {
          /*font-size:20px;*/
        }
  
        #re-init {
          background: transparent;
          color: white;
          margin-left: 10px;
          font-size: 14px !important;
          /*padding:5px;*/
          height: auto !important;
          border: none;
        }
  
        .click-to-zoom {
          display: none;
        }
  
        .grid {
          opacity: 0;
        }
  
        #question-modal {
          transform-origin: top left;
        }
  
        #question-modal > div {
          flex-direction: row;
        }
  
        #modal-header {
          display: flex;
          padding: 5px;
          text-align: center;
          color: #fff;
          background-color: #151b4b;
          z-index: 3;
          /*align-items:center;*/
        }
  
        #modal-header > div {
          padding: 5px;
          text-align: center;
          flex: 1;
          align-items: center;
          justify-content: center;
          display: flex;
          max-width: 100%;
        }
  
        #modal-header > div > div {
          max-width: 100%;
        }
  
        #question-modal {
          background-color: #2a3698;
          border: 3px solid #ffff00;
          z-index: 10;
        }
  
        .expanded {
          transition: 0.5s all ease; /*, .35s border-width step-end, 1s transform ease;*/
          border-width: 0;
        }
  
        .modal,
        .modal-body {
          background-color: transparent;
          color: #fff;
          text-align: center;
        }
  
        .modal-body .modal-inner {
          overflow: auto;
          padding-left: 20px;
          padding-right: 20px;
          flex: 1;
        }
  
        .modal-body {
          width: 100%;
          display: flex;
          align-items: center;
          padding-top: 20px;
          justify-content: center;
        }
  
        #question-title {
          font-weight: bold;
          padding-left: 10%;
          padding-right: 10%;
        }
  
        .question,
        .answer {
          margin: auto;
        }
  
        #question-modal .question {
          display: none;
          opacity: 0;
        }
  
        #answer-button,
        #continue-button {
          cursor: pointer;
        }
  
        /*
  #modal-header #continue-button {
      justify-content:left;
  }*/
  
        #question-modal .question {
          border-top: 3px dotted white;
          margin-top: 10px;
          padding-top: 10px;
        }
  
        #question-modal .reveal {
          transition: max-height 2s ease, opacity 2s ease;
          opacity: 1;
        }
  
        .mathy {
          background-color: transparent;
        }
  
        kbd {
          -moz-border-radius: 3px;
          -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
          -webkit-border-radius: 3px;
          -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
          background-color: #f7f7f7;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
          color: #333;
          display: inline-block;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.4;
          margin: 0 0.1em;
          padding: 0.1em 0.6em;
          text-shadow: 0 1px 0 #fff;
        }
  
        #options {
          display: block;
        }
  
        .grid {
          opacity: 0;
        }
  
        #first-load {
          max-width: 500px;
          margin: auto;
          /* padding-left: 20px; */
          /* padding-right: 20px; */
          background-color: #ffff5f;
          border-radius: 3px;
          color: #000;
          padding: 20px;
          margin-bottom: 20px;
        }
  
        #first-load a {
          color: #000;
        }
  
        .cell.points .cell-inner {
          font-weight: bold;
        }
  
        .menu-picker {
          background-color: #131844;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          line-height: 1.25;
          text-transform: uppercase;
          align-self: flex-end;
          padding: 10px 10px;
          border-right: 2px solid #999;
          border-top: 2px solid #999;
          /*border-top-right-radius: 10px;*/
          margin-right: 10px;
          position: absolute;
          color: #999;
          text-decoration: none;
          bottom: 0;
        }
  
        .menu-picker:hover {
          color: white;
          text-decoration: none;
          border-color: white;
        }
      </style>
  
      <style type="text/css">
        #test-height {
          font-family: verdana; /* TODO */
          padding: 0;
          margin: 0;
          color: black;
        }
  
        * {
          box-sizing: border-box;
        }
  
        .cell-inner p:last-child {
          margin-bottom: 0;
        }
  
        #grid {
          transition: opacity 1s;
        }
  
        .grid {
          /*
      border:3px solid black;
      border-top-width:6px;*/
          /*box-shadow: #ccc 0 0 2px 0*/
          padding: 10px;
          background: linear-gradient(to top, #1d2675 0%, #2a3698 100%);
          position: relative;
          transition: 0.1s;
          z-index: 1;
          transform-origin: center left;
          font-size: 12px;
          display: flex;
          height: 100vh;
          flex-direction: column;
          align-items: stretch;
        }
  
        .grid-zoomed {
          /*transform:scale(2);*/
          z-index: 10;
        }
  
        .click-to-zoom {
          opacity: 0;
          transition: 0.3s;
          position: absolute;
          top: 0;
          right: 0;
        }
  
        .grid:hover .click-to-zoom {
          opacity: 1;
        }
  
        .grid.grid-zoomed .click-to-zoom {
          opacity: 0;
        }
  
        .click-to-zoom span {
          background-color: #ccc;
          font-size: 14px;
          display: inline-block;
          padding: 3px;
        }
  
        .grid-row {
          display: flex;
          flex: 1;
        }
  
        /*
  .grid-col {
      flex-direction:column;
      display:flex;
  }
  
  .grid-col > div {
      border:3px solid black;
  }*/
  
        /*
  img, iframe {
      display:none;
  }*/
  
        .grid-cell {
          border: 3px solid black;
          overflow: hidden;
          position: relative;
          background-color: #2a3698;
          transition: 0.3s;
          flex: 1;
        }
  
        .grid-cell-zoomed {
          transform: scale(2);
          z-index: 10;
        }
  
        .grid-last-row {
          border-bottom: 3px solid black;
        }
  
        .grid-first-row {
          border-top: 3px solid black;
        }
  
        .grid-row-questions {
          border-left: 3px solid black;
          border-right: 3px solid black;
        }
  
        .grid-row-cats .grid-cell {
          border-color: transparent;
        }
  
        .grid-row-cats .cell {
          /*align-items:flex-end;*/
        }
  
        .grid-row-cats-resize-done {
          flex: none;
        }
  
        .cell-group {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }
  
        .cell {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
          backface-visibility: hidden;
          perspective: 1000px;
          transform-style: preserve-3d;
          -webkit-perspective: 0;
          -webkit-backface-visibility: hidden;
          width: 100%;
          height: 100%;
        }
  
        .cell.back {
          transform: rotateY(180deg);
        }
  
        .cell.front {
          z-index: 2;
        }
  
        .cell.back,
        .cell.front {
          cursor: pointer;
          overflow: hidden;
        }
  
        .cell.back,
        .cell.front,
        .cell-group,
        .category {
          transition: 0.3s;
        }
  
        .cell-group:hover {
          border-color: yellow;
        }
  
        .cell-group:hover .front {
          transform: rotateY(180deg);
        }
  
        .cell-group:hover .back {
          transform: rotateY(0deg);
        }
  
        .cell-group:hover .back,
        .cell-group:hover .front {
          border-color: yellow;
        }
  
        .cell-group:hover .back,
        .cell-group:hover .front {
          transition: 0.6s;
        }
  
        .cell-group.empty {
          pointer-events: none;
        }
  
        .cell-group.empty:hover {
          border-color: black;
          transform: none;
        }
  
        /* play mode */
        .points .front,
        .points .back {
          display: none;
        }
  
        .grid-play .cell-group {
          cursor: pointer;
        }
  
        .grid-play .cell-group:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
  
        .inert .cell-inner {
          opacity: 0.05;
        }
  
        .grid.grid-play {
          background: none;
        }
  
        .resizing {
          transition: none !important;
        }
      </style>
  
      <script type="text/javascript">
        function removeClass(selector, cls) {
          var doms = document.querySelectorAll(selector);
          for (var i = 0; i < doms.length; i++) {
            doms[i].classList.remove(cls);
          }
        }
  
        function debounce(func, wait, immediate) {
          var timeout;
          return function () {
            var context = this,
              args = arguments;
            var later = function () {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        }
  
        function ready(fn) {
          if (document.readyState != "loading" && document.body) {
            fn();
          } else {
            document.addEventListener("DOMContentLoaded", fn);
          }
        }
  
        if (!Math.log2)
          Math.log2 = function (x) {
            return Math.log(x) * Math.LOG2E;
          };
  
        function capSizes(el, max_width, max_height) {
          var treeWalker = document.createTreeWalker(
            el,
            NodeFilter.SHOW_ELEMENT,
            null,
            false
          );
          var did_work = false;
          while (treeWalker.nextNode()) {
            node = treeWalker.currentNode;
            if (
              node.tagName == "IMG" ||
              node.tagName == "VIDEO" ||
              node.tagName == "IFRAME"
            ) {
              try {
                node.style.maxWidth = max_width + "px";
                node.style.maxHeight = max_height + "px";
                did_work = true;
              } catch (e) {}
            }
          }
  
          return did_work;
        }
  
        var shrink_cell_cache = {};
        var enable_caching = false;
        function shrink_cell(
          $cell,
          $scaler,
          max_width,
          max_height,
          max_font_size,
          transforms,
          capsizes
        ) {
          if (enable_caching) {
            var cache_key = [max_width, max_height, $cell.innerHTML].join(".");
            var cached = shrink_cell_cache[cache_key];
          } else {
            return _shrink_cell(
              $cell,
              $scaler,
              max_width,
              max_height,
              max_font_size,
              transforms,
              capsizes
            );
          }
  
          if (cached) {
            $scaler.style.fontSize = cached.font_size + "px";
            $scaler.style.transform =
              (transforms || "") + " scale(" + cached.scale + ") ";
            capSizes($cell, max_width, max_height);
          } else {
            shrink_cell_cache[cache_key] = _shrink_cell(
              $cell,
              $scaler,
              max_width,
              max_height,
              max_font_size,
              transforms,
              capsizes
            );
          }
        }
  
        test_divs = [];
        function initDivs(max_font_size) {
          if (test_divs.length - 1 == max_font_size) {
            return;
          }
          for (var i = 0; i <= max_font_size; i++) {
            var dummy_element = test_divs[i];
            if (!dummy_element) {
              var dummy_element = document.createElement("div");
              //dummy_element.style.opacity = 0;
              dummy_element.style.display = "block";
              //dummy_element.style.overflowX = "auto";
              dummy_element.style.position = "absolute";
              //dummy_element.style.visibility = "hidden";
              dummy_element.style.left = "-100000px";
              dummy_element.style.top = -(i * 120) + "px";
              dummy_element.style.fontFamily =
                "Verdana, Arial, Helvetica, sans-serif";
              dummy_element.style.color = "#000";
              dummy_element.style.border = "3px solid black";
              dummy_element.style.fontSize = i + "px";
              //dummy_element.setAttribute("id", "test-height")
              test_divs[i] = dummy_element;
              var body = document.querySelectorAll("body")[0];
              body.appendChild(dummy_element);
            }
          }
        }
  
        function shrink_in_place($cell, max_font_size, min_font_size) {
          var div = $cell;
          var font_size = max_font_size;
  
          var a = { length: max_font_size + 1 };
          var font_size = binarySearch(a, function (el, array, font_size) {
            div.style.fontSize = font_size + "px";
            var isHorizontalScrollbar = div.scrollWidth > div.clientWidth;
            var isVerticalScrollbar = div.scrollHeight > div.clientHeight;
            var overflows = isHorizontalScrollbar || isVerticalScrollbar;
            return overflows;
          });
          font_size = font_size - 1;
  
          font_size = Math.max(min_font_size, Math.min(font_size, max_font_size));
  
          div.style.fontSize = font_size + "px";
          return font_size;
        }
  
        /**
         *  * Return 0 <= i <= array.length such that !pred(array[i - 1]) && pred(array[i]).
         **/
        function binarySearch(array, pred) {
          var lo = -1,
            hi = array.length;
          while (1 + lo < hi) {
            var mi = lo + ((hi - lo) >> 1);
            if (pred(array[mi], array, mi)) {
              hi = mi;
            } else {
              lo = mi;
            }
          }
          return hi;
        }
  
        function escapeHtml(unsafe) {
          return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }
  
        function getText(el) {
          var treeWalker = document.createTreeWalker(
            el,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null,
            false
          );
          var text = [];
          while (treeWalker.nextNode()) {
            var node = treeWalker.currentNode;
            if (node.nodeType == 3) {
              text.push(escapeHtml(node.textContent));
            } else if (node.tagName == "BR") {
              text.push("<BR>");
            } else if (node.tagName == "P") {
              if (text.length != 0) {
                text.push("<BR>");
              }
            }
          }
          var t = text.join("");
          return t;
        }
  
        function _shrink_cell(
          $cell,
          $scaler,
          max_width,
          max_height,
          max_font_size,
          transforms,
          capsizes,
          min_font_size
        ) {
          if (capsizes === undefined) {
            capsizes = true;
          }
  
          if (min_font_size === undefined) {
            min_font_size = 1;
          }
  
          var text = getText($scaler || $cell);
  
          initDivs(max_font_size);
          for (var i = 0; i <= max_font_size; i++) {
            dummy_element = test_divs[i];
            dummy_element.innerHTML = text;
            dummy_element.style.width = max_width + "px";
            dummy_element.style.height = max_height + "px";
          }
  
          var font_size = binarySearch(test_divs, function (div) {
            var isHorizontalScrollbar = div.scrollWidth > div.clientWidth;
            var isVerticalScrollbar = div.scrollHeight > div.clientHeight;
            var overflows = isHorizontalScrollbar || isVerticalScrollbar;
            return overflows;
          });
          font_size = font_size - 1;
  
          font_size = Math.max(min_font_size, Math.min(font_size, max_font_size));
  
          if (!$scaler) {
            return { font_size: font_size };
          }
  
          $cell.style.fontSize = "";
          $scaler.style.fontSize = font_size + "px";
          $scaler.style.transform = "";
  
          //text_length_font_size_cache[text.length] = Math.max(font_size, text_length_font_size_cache[text.length] || 0)
  
          var extra_width = 0; // parseInt(styles.getPropertyValue("padding-left")) + parseInt(styles.getPropertyValue("padding-right"));
          var extra_height = 0; //parseInt(styles.getPropertyValue("padding-top")) + parseInt(styles.getPropertyValue("padding-bottom"));
          if (capsizes) {
            var did_work = capSizes($cell, max_width, max_height);
          }
  
          var bbox = getBoundingClientRect($scaler);
          var w = bbox.width;
          var h = bbox.height;
          var scale = Math.min(
            1,
            Math.min(
              (1.0 * (max_width - extra_width)) / w,
              (1.0 * (max_height - extra_height)) / h
            )
          );
          if (scale != 1) {
            //debugger;
          }
          $scaler.style.transform = (transforms || "") + " scale(" + scale + ") ";
  
          return { font_size: font_size, scale: scale };
        }
  
        function getBoundingClientRect(el) {
          var bbox = el.getBoundingClientRect();
          /*
      bbox.left += window.scrollX;
      bbox.top += window.scrollY;*/
          return {
            top:
              bbox.top +
              (window.scrollY || document.documentElement.scrollTop || 0),
            left:
              bbox.left +
              (window.scrollX || document.documentElement.scrollLeft || 0),
            width: bbox.width,
            height: bbox.height,
            x: bbox.x,
            y: bbox.y,
          };
        }
  
        /*
  function getContainer(grid){
      if(grid.getAttribute("id") == "grid"){
          return window;
      } else {
          return grid;
      }
  
  }*/
  
        var render_queue = [];
        var render_queue_index = 0;
        var render_interval = null;
        var max_renderers = 1;
        var work_scheduled = false;
  
        function resetRenderQueue() {
          render_queue = [];
          render_queue_index = 0;
        }
  
        function renderQueue() {
          var steps = 1;
          var i = 0;
          var start = +new Date();
          while (
            +new Date() - start < 10 &&
            render_queue_index < render_queue.length &&
            render_queue.length
          ) {
            i++;
            var item = render_queue[render_queue_index];
            item[0].apply(item[1], item.slice(2));
            render_queue_index++;
          }
          //console.log(i);
  
          if (render_queue_index >= render_queue.length) {
            //clearInterval(render_interval);
            //render_interval = null;
            work_scheduled = false;
          } else {
            work_scheduled = setTimeout(renderQueue);
          }
        }
  
        function enqueueRender() {
          var item = Array.prototype.slice.call(arguments);
          item[0].apply(item[1], item.slice(2));
          return;
          render_queue.push(Array.prototype.slice.call(arguments));
          if (!work_scheduled) {
            //console.log("starting queue");
            work_scheduled = setTimeout(renderQueue);
            //render_interval = setInterval(renderQueue, 16);
          }
  
          //setTimeout(renderQueue, 10);
        }
  
        /*
  function renderNext(grids, i){
      var d = new Date();
      _resizeCells(grids[i], true);
      console.log(new Date() - d);
      if(i < grids.length - 1){
          setTimeout(renderNext, 0, grids, i+1);
      }
  }*/
  
        /*
  function setOpacity(el, opacity){
      el.style.opacity = opacity;
  }*/
  
        function matches(el, selector) {
          return (
            el.matches ||
            el.matchesSelector ||
            el.msMatchesSelector ||
            el.mozMatchesSelector ||
            el.webkitMatchesSelector ||
            el.oMatchesSelector
          ).call(el, selector);
        }
  
        function on(eventName, elementSelector, handler, extra) {
          var names = eventName.split(" ");
          for (var i = 0; i < names.length; i++) {
            var eventName = names[i];
            document.addEventListener(
              eventName,
              function (e) {
                // loop parent nodes from the target to the delegation node
                for (
                  var target = e.target;
                  target && target != this;
                  target = target.parentNode
                ) {
                  if (matches(target, elementSelector)) {
                    handler.call(target, e);
                    break;
                  }
                }
              },
              extra || false
            );
          }
        }
  
        function closest(element, selector) {
          do {
            if (matches(element, selector)) {
              return element;
            }
          } while ((element = element.parentElement));
          return null;
        }
  
        function coordsFromEvent(e) {
          if (e.touches && e.touches.length > 0) {
            return e.touches[0];
          }
          return e;
        }
  
        function retypeset(scope, then) {
          if (!window.MathJax) {
            return false;
          }
  
          MathJax.Hub.Config({
            asciimath2jax: {
              delimiters: [["\`", "\`"]],
              skipTags: [
                "script",
                "noscript",
                "style",
                "textarea",
                "pre",
                "code",
                "body",
              ],
            },
          });
  
          scope = scope || document;
          var math = scope.querySelectorAll(".mathy");
          for (var i = 0; i < math.length; i++) {
            var node = math[i];
            node.innerText =
              node.getAttribute("data-original") || "\`" + node.innerText + "\`";
            node.setAttribute("data-original", node.innerText);
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, node]);
          }
  
          if (math.length > 0) {
            MathJax.Hub.Queue([then, window]);
            return true;
          }
          return false;
        }
  
        function prepwork(cell, scale_factor) {
          if (scale_factor === undefined) {
            scale_factor = 1;
          }
          var width = cell.parentElement.clientWidth;
          var height = cell.parentElement.clientHeight;
          var inner = cell.querySelectorAll(".cell-inner")[0];
          var capsizes = mode == "play" ? false : true;
          //console.log(height);
          shrink_cell(
            cell,
            inner,
            width * scale_factor,
            height * scale_factor,
            32,
            "",
            capsizes
          );
          return inner;
        }
  
        function minirender(grid, on_done, question_scale_factor) {
          if (question_scale_factor === undefined) {
            question_scale_factor = 1;
          }
  
          window.nextthing = function () {
            setTimeout(function () {
              grid.classList.add("resizing");
              var t = grid.offsetTop;
              miniresize(
                grid,
                grid.querySelectorAll(".grid-row-cats .cell"),
                true,
                1
              );
              miniresize(
                grid,
                grid.querySelectorAll(".grid-row-questions .cell"),
                false,
                question_scale_factor
              );
              grid.classList.remove("resizing");
              if (on_done) {
                on_done(grid);
              }
            });
          };
  
          if (!retypeset(grid, "nextthing")) {
            window.nextthing();
          }
        }
  
        function miniresize(grid, cells, is_cats, scale_factor) {
          if (is_cats) {
            var cat = grid.querySelectorAll(".grid-row-cats")[0];
            cat.classList.remove("grid-row-cats-resize-done");
            cat.style.height = "auto";
            var max_height = 0;
            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              cell.style.paddingTop = 0;
              var inner = prepwork(cell);
              cell.client_height = inner.clientHeight;
              max_height = Math.max(max_height, inner.clientHeight);
            }
            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              cell.style.paddingTop = max_height - cell.client_height + "px";
            }
  
            cat.classList.add("grid-row-cats-resize-done");
            cat.style.height = max_height + "px";
          } else {
            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              enqueueRender(prepwork, null, cell, scale_factor);
            }
          }
        }
  
        /*
  function mini(){
      function allresize(){
          resetRenderQueue();
  
          //var cells = document.querySelectorAll('.cell');
          //miniresize(cells);
          var grids = document.querySelectorAll('.grid');
          for(var i = 0; i < grids.length; i++){
              var cells = grids[i].querySelectorAll(".cell");
              enqueueRender(function(grid){
                  grid.style.display = "block";
                  grid.style.opacity = "0";
              }, null, grids[i]);
              miniresize(cells);
              enqueueRender(function(grid){
                  grid.style.opacity = "1";
              }, null, grids[i]);
          }
      }
  
      window.allresize = allresize;
  
      function unzoom(){
          var zoomed = document.querySelectorAll(".grid-zoomed");
          for(var i = 0; i < zoomed.length; i++){
              zoomed[i].classList.remove("grid-zoomed");
              zoomed[i].style.transform = "";
          }
      }
  
      var did_all_resize = retypeset(document, "allresize");
      if(!did_all_resize){
          allresize();
      }
      window.addEventListener("resize", debounce(allresize, 100, false));
  
      document.addEventListener("keyup", function(e){
          if(e.keyCode == 27){
              unzoom();
          }
      }, false);
  
      document.addEventListener("click", function(e){
          unzoom();
      }, false);
  
      on("click", ".grid", function(e){
          //console.log(e);
          var bbox = getBoundingClientRect(this);
          var x = e.pageX - bbox.left;
          var y = e.pageY - bbox.top;
          //console.log(x, y);
          this.classList.add("grid-zoomed");
          //this.style.t
          //this.style.transformOrigin = x + "px " + y + "px";
          //this.style.transform = "translate(" + (x) + "px, " + (y) + "px) scale(3) translate(" + (-x) + "px, " + (-y) + "px)";
          this.style.transform = "scale(2)";
      });
  
  }*/
      </script>
  
      <link rel="canonical" href="/play/html-jeopardy-44" />
      <script>
        var modal = function () {};
  
        var game = {};
        var mode = "play";
        var grid = null;
  
        function getCurrentState() {
          var teams = [];
          var teams_dom = document.querySelectorAll(".team");
          for (var i = 0; i < teams_dom.length; i++) {
            var t = teams_dom[i];
            var name = t.querySelectorAll(".name")[0].textContent;
            var points = t.querySelectorAll(".points")[0].textContent;
            teams[i] = { name: name, points: points };
          }
  
          var inerts = {};
          var inert_dom = document.querySelectorAll(".grid-row-questions .inert");
          for (var i = 0; i < inert_dom.length; i++) {
            var id = inert_dom[i].getAttribute("id");
            inerts[id] = true;
          }
  
          return {
            teams: teams,
            inerts: inerts,
          };
        }
  
        function getOldState() {
          try {
            var old_state = localStorage.getItem("game-6948852");
          } catch (e) {
            return null;
          }
          if (old_state) {
            return JSON.parse(old_state);
          }
          return null;
        }
  
        function clearState() {
          try {
            localStorage.removeItem("game-6948852");
          } catch (e) {}
        }
  
        function resize() {
          var bbox_teams = getBoundingClientRect(
            document.getElementById("teams")
          );
          var rows = document.querySelectorAll(".grid-row").length;
          if (bbox_teams.height == 0) {
            var h = window.innerHeight;
          } else {
            var h =
              bbox_teams.top +
              (window.innerHeight - bbox_teams.height) / rows / 4;
          }
  
          grid.style.height = h + "px";
          minirender(
            grid,
            function (g) {
              g.style.opacity = 1;
            },
            0.6
          );
        }
  
        ready(function () {
          grid = document.querySelectorAll(".grid")[0];
          window.addEventListener("resize", debounce(resize, 100, false));
          resize();
          renderState(initial_state);
  
          window.addEventListener(
            "keydown",
            function (e) {
              var ESC = 27;
              var SPACE = 32;
              if (modal.is_open) {
                if (e.keyCode == ESC) {
                  e.preventDefault();
                  modal.hide();
                } else if (e.keyCode == SPACE) {
                  e.preventDefault();
                  modal.reveal();
                }
              }
            },
            false
          );
  
          var debouncedSaveState = debounce(
            function () {
              try {
                localStorage.setItem(
                  "game-6948852",
                  JSON.stringify(getCurrentState())
                );
              } catch (e) {}
            },
            100,
            false
          );
  
          on(
            "keyup change input blur focus",
            "#teams .name, #teams .points",
            debouncedSaveState
          );
  
          on("click", "#re-init", function (e) {
            e.preventDefault();
            if (
              confirm(
                "This will clear the scores and team names, and start a new game. Click OK if you want to do this"
              )
            ) {
              clearState();
              game.init(true);
            }
          });
  
          on("click", "#answer-button", function (e) {
            modal.reveal();
          });
  
          on("click", "#continue-button", function (e) {
            modal.hide();
          });
  
          on("click", ".grid-row-questions .grid-cell", function (e) {
            modal.show(this);
          });
  
          // prevent the buttons from being highlighted
          on("mousedown", ".minus, .plus", function (e) {
            e.preventDefault();
          });
  
          // handle points clicks
          on("click", ".minus, .plus", function (e) {
            var $team = closest(this, ".team");
            var $points = $team.querySelectorAll(".points")[0];
            var points = parseInt($points.innerText);
            var active_question = document.querySelectorAll(
              ".active-question .cell-inner"
            )[0];
            var fallback = document.querySelectorAll(
              ".grid-row-questions .cell-inner"
            )[0];
            var val = parseInt(
              active_question ? active_question.innerText : fallback.innerText
            );
            if (this.classList.contains("minus")) {
              val = -val;
            }
            $points.innerText = points + val;
            if (active_question) {
              document
                .querySelectorAll(".active-question")[0]
                .classList.add("inert");
            }
            debouncedSaveState();
          });
        });
      </script>
  
      <style type="text/css"></style>
  
      <script>
        function clearLocalStorage() {
          for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);
            //(key.indexOf("jeopardy-0-") == 0 && localStorage.getItem("jeopardy-0") == "6948852")){
            if (key.indexOf("jeopardy-6948852") == 0) {
              localStorage.removeItem(key);
            }
          }
        }
  
        initial_state = { page: "menu" };
  
        try {
          history.replaceState(initial_state, "JeopardyLabs");
        } catch (e) {}
  
        game.first_render = true;
  
        game.initTeam = function (number_of_teams) {
          document.getElementById("teams").style.display = "flex";
          var teams = document.querySelectorAll("#teams .team");
          for (var i = 0; i < number_of_teams; i++) {
            var t = teams[i];
          }
        };
  
        game.init = function (clear) {
          var val = document.querySelectorAll("#options select")[0].value;
  
          if (isNaN(val)) {
            val = 0;
            do {
              var n = prompt("Enter the number of teams you have");
              val = parseInt(n, 10) || 0;
            } while (val <= 0);
          }
  
          renderState({ page: "game" });
          // add all the teams
          document.getElementById("teams").style.display = "flex";
          var teams = document.querySelectorAll("#teams .team");
          for (var i = 0; i < teams.length; i++) {
            teams[i].style.display = "none";
          }
  
          for (var i = 0; i < val; i++) {
            var t = teams[i];
            if (!t) {
              var t = teams[0].cloneNode(true);
              teams[0].parentElement.appendChild(t);
              t.querySelectorAll(".name")[0].textContent = "Team " + (i + 1);
              t.querySelectorAll(".points")[0].textContent = "0";
            } else {
              t = teams[i];
            }
            t.style.display = "block";
          }
  
          var teams = document.querySelectorAll("#teams .team");
  
          if (game.first_render) {
            var old_state = getOldState();
            if (old_state) {
              for (var i = 0; i < val; i++) {
                var t = teams[i];
                if (old_state.teams[i]) {
                  var name = old_state.teams[i].name;
                  var points = old_state.teams[i].points;
                  t.querySelectorAll(".name")[0].textContent = name;
                  t.querySelectorAll(".points")[0].textContent = points;
                }
              }
  
              // restore the inert questions
              var inerts = old_state.inerts;
              for (var id in inerts) {
                try {
                  document.getElementById(id).classList.add("inert");
                } catch (e) {
                  continue;
                }
              }
            }
          } else if (clear) {
            for (var i = 0; i < val; i++) {
              var t = teams[i];
              t.querySelectorAll(".name")[0].textContent = "Team " + (i + 1);
              t.querySelectorAll(".points")[0].textContent = "0";
            }
            removeClass(".inert", "inert");
          } else {
            // coming just restore
          }
  
          resize();
  
          try {
            history.pushState({ page: "game" }, "JeopardyLabs");
          } catch (e) {}
  
          game.first_render = false;
        };
  
        function hideModal() {
          modal.is_open = false;
          var div = document.getElementById("question-modal");
          div.style.display = "none";
          div.classList.remove("expanded");
          div.style.borderWidth = "3px";
          div.querySelectorAll(".modal-inner")[0].innerHTML = "";
        }
  
        function renderMenu() {
          var old_state = getOldState() || !game.first_render;
          if (!game.first_render) {
            document.querySelectorAll("#submit")[0].value = "Continue";
            document.querySelectorAll("#reset-all")[0].style.display = "";
          } else if (old_state) {
            document.querySelectorAll("#submit")[0].value = "Continue";
            document.querySelectorAll("#reset-all")[0].style.display = "";
            var teams = old_state.teams.length;
            var chooser = document.getElementById("team-chooser");
            if (teams > 10) {
              var opt = document.createElement("option");
              opt.setAttribute("value", teams);
              opt.textContent = teams + " teams";
              chooser.insertBefore(opt, document.getElementById("last-option"));
              //chooser.appendChild(opt);
            }
            document.getElementById("team-chooser").value = teams;
          } else {
            document.querySelectorAll("#submit")[0].value = "Start";
            document.querySelectorAll("#reset-all")[0].style.display = "none";
          }
        }
  
        function renderState(state) {
          document.querySelectorAll("#options")[0].style.display = "none";
          document.querySelectorAll("#teams")[0].style.display = "none";
          document.querySelectorAll("#gameplay")[0].style.filter = "";
          hideModal();
  
          if (state.page == "menu") {
            document.querySelectorAll("#options")[0].style.display = "block";
            renderMenu();
          } else if (state.page == "game") {
            document.getElementById("teams").style.display = "";
            document.querySelectorAll("#gameplay")[0].style.filter = "blur(0px)";
          } else if (state.page == "slide") {
            document.getElementById("teams").style.display = "";
            document.querySelectorAll("#gameplay")[0].style.filter = "blur(0px)";
            modal.show(document.getElementById(state.cell), true);
          }
        }
  
        window.onpopstate = function (event) {
          renderState(window.history.state);
        };
  
        function trimHTML(el) {
          var treeWalker = document.createTreeWalker(
            el,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null,
            false
          );
          while (treeWalker.nextNode()) {
            var node = treeWalker.currentNode;
          }
          var nodes_to_delete = [];
          do {
            var node = treeWalker.currentNode;
            if (node.nodeType == 3 && (node.data || "").trim() == "") {
              nodes_to_delete.push(node);
            } else if (node.tagName == "SCRIPT") {
            } else if (node.tagName == "BR") {
              nodes_to_delete.push(node);
            } else if (
              node.tagName == "P" &&
              (node.innerText || "").trim() == ""
            ) {
              nodes_to_delete.push(node);
            } else {
              break;
            }
          } while (treeWalker.previousNode());
          for (var i = 0; i < nodes_to_delete.length; i++) {
            try {
              nodes_to_delete[i].parentElement.removeChild(nodes_to_delete[i]);
            } catch (e) {
              console.log("passing");
            }
          }
        }
  
        modal.reveal = function () {
          var q = document.querySelectorAll("#question-modal .question")[0];
          q.style.display = "block";
          function scrollTo(element, to, duration) {
            var start = element.scrollTop,
              change = to - start,
              currentTime = 0,
              increment = 20;
  
            var animateScroll = function () {
              currentTime += increment;
              var val = easeInOutQuad(currentTime, start, change, duration);
              element.scrollTop = val;
              if (currentTime < duration) {
                setTimeout(animateScroll, increment);
              }
            };
            animateScroll();
          }
  
          //t = current time
          //b = start value
          //c = change in value
          //d = duration
          function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          }
  
          var modal_inner = document.querySelectorAll(
            "#question-modal .modal-inner"
          )[0];
          var original_val = modal_inner.scrollTop;
          var start_of_modal = getBoundingClientRect(modal_inner).top;
          var start_of_question = getBoundingClientRect(q).top;
          var val = start_of_question - start_of_modal;
          scrollTo(modal_inner, val, 250);
  
          setTimeout(function () {
            q.classList.add("reveal");
          }, 0);
  
          document.querySelectorAll(".active-question")[0].classList.add("inert");
        };
  
        modal.show = function (cell, no_push_state) {
          removeClass(".active-question", "active-question");
          cell.classList.add("active-question");
  
          var row = cell.getAttribute("data-row");
          var col = cell.getAttribute("data-col");
          var category = document.querySelectorAll(".grid-row-cats .cat-cell")[
            col
          ].innerText;
          var points = cell.querySelectorAll(".cell-inner")[0].innerText;
          document.querySelectorAll("#question-title")[0].innerText =
            category + " for " + points;
  
          var bbox = cell.getBoundingClientRect();
          var div_modal = document.getElementById("question-modal");
          div_modal.style.display = "block";
          div_modal.style.opacity = 0;
  
          var inner = document.querySelectorAll(
            "#question-modal .modal-inner"
          )[0];
          inner.innerHTML =
            cell.querySelectorAll(".answer")[0].outerHTML +
            "<br>" +
            cell.querySelectorAll(".question")[0].outerHTML;
  
          if (!no_push_state) {
            try {
              console.log("pre length", window.history.length);
              history.pushState(
                { page: "slide", cell: cell.getAttribute("id") },
                "JeopardyLabs"
              );
              console.log("post length", window.history.length);
            } catch (e) {}
          }
  
          setTimeout(function () {
            var q = document.querySelectorAll("#question-modal .answer")[0];
            try {
              q.querySelectorAll("video, audio").get(0).play();
            } catch (e) {}
  
            try {
              var iframe = q.querySelectorAll("iframe")[0];
              var src = iframe.getAttribute("src") || "";
              var a = document.createElement("a");
              a.href = src;
              if (a.hostname == "www.youtube.com") {
                a.search = (a.search || "?") + "&autoplay=1";
                iframe.contentWindow.location.replace(a.toString());
                //iframe.setAttribute('src', a.toString());
              }
            } catch (e) {
              // ?
            }
          }, 500);
  
          document.querySelectorAll(
            "#question-modal .modal-body .modal-inner"
          )[0].scrollTop = 0;
  
          trimHTML(document.querySelectorAll("#question-modal .answer")[0]);
          trimHTML(document.querySelectorAll("#question-modal .question")[0]);
  
          // the height of the contents of the modal should be...
          /* [MODAL HEADER]
           *     ^
           *     |
           *     |    <--- this tall
           *     v
           * [TEAMS BAR]
           */
          var content_bbox = getBoundingClientRect(
            document.querySelectorAll("#question-modal .modal-body")[0]
          );
          var position_of_top = content_bbox.top;
          var teams = document.querySelectorAll("#teams")[0];
          var position_of_bottom =
            getBoundingClientRect(teams).top || window.innerHeight;
          var h = position_of_bottom - position_of_top - 20; // 20 pixels for some extra room
  
          document.querySelectorAll(
            "#question-modal .modal-inner"
          )[0].style.maxHeight = h + "px";
          document.querySelectorAll(
            "#question-modal .modal-body"
          )[0].style.height = h + "px";
  
          var q = document.querySelectorAll("#question-modal .question")[0];
          q.style.display = "block";
          var content = document.querySelectorAll(
            "#question-modal .modal-inner"
          )[0];
          var result = shrink_in_place(content, 100, 24);
          q.style.display = "none";
  
          div_modal.style.transform =
            "translate(" +
            bbox.left +
            "px, " +
            bbox.top +
            "px) scale(" +
            bbox.width / window.innerWidth +
            ", " +
            bbox.height / window.innerHeight +
            ")";
          div_modal.style.opacity = 1;
  
          removeClass(".expanded", "expanded");
  
          setTimeout(function () {
            div_modal.classList.add("expanded");
            div_modal.style.top = 0;
            div_modal.style.left = 0;
            div_modal.style.bottom = 0;
            div_modal.style.right = 0;
            div_modal.style.width = "100%";
            div_modal.style.height = "100%";
            div_modal.style.borderWidth = 0;
            div_modal.style.transform = "translate(0px, 0px) scale(1)";
          }, 50);
          modal.is_open = true; // flag for the keyboard event
        };
  
        modal.hide = function () {
          backToGame();
          renderState({ page: "game" });
        };
  
        function backToGame() {
          var state = window.history.state;
          if (state.page == "slide") {
            window.history.go(-1);
          }
        }
  
        function backToMenu() {
          renderState({ page: "menu" });
          var state = window.history.state;
          if (state.page == "slide") {
            window.history.go(-2);
          } else if (state.page == "game") {
            window.history.go(-1);
          }
        }
      </script>
    </head>
  
    <body>
      <div id="gameplay">
        <div class="grid grid-play" style="height: 100vh">
          <div class="grid-row grid-row-cats" style="">
          ${dataset.sets.map(
            ({name}) =>
              `<div class="grid-cell" data-row="0" data-col="0"> 
                <div class="cell" style="padding-top: 0px;">
                  <div class="cell-inner cat-cell" style="font-size: 32px; transform: scale(1);">
                    ${name}
                  </div>
                </div>
              </div>`
          )}
          </div>
  
          <div class="grid-row grid-row-questions grid-first-row">
            <div
              class="cell-group grid-cell"
              id="cell-112615098"
              data-row="1"
              data-col="0"
            >
              <div class="cell points">
                <div class="cell-inner">100</div>
                <div class="front answer">
                  Defines the number of pixels of space between a cell’s contents
                  and the cell wall.
                </div>
                <div class="back question">What is cell padding</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615108"
              data-row="1"
              data-col="1"
            >
              <div class="cell points">
                <div class="cell-inner">100</div>
                <div class="front answer">
                  You insert the coordinates for the various map shapes in the
                  <area /> tag in the _________________________ code.
                </div>
                <div class="back question">What is HTML</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615118"
              data-row="1"
              data-col="2"
            >
              <div class="cell points">
                <div class="cell-inner">100</div>
                <div class="front answer">
                  In a(n) ____________________ box, a visitor may enter larger
                  amounts of data.
                </div>
                <div class="back question">What is a text area</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615128"
              data-row="1"
              data-col="3"
            >
              <div class="cell points">
                <div class="cell-inner">100</div>
                <div class="front answer">
                  An external style sheet must be saved as a(n) ____ file.
                </div>
                <div class="back question">What is .css</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615138"
              data-row="1"
              data-col="4"
            >
              <div class="cell points">
                <div class="cell-inner">100</div>
                <div class="front answer">
                  ____________________ is defined as the combination of text,
                  sound, and video to express an idea or convey a message.
                </div>
                <div class="back question">What is multimedia</div>
              </div>
            </div>
          </div>
  
          <div class="grid-row grid-row-questions">
            <div
              class="cell-group grid-cell"
              id="cell-112615100"
              data-row="2"
              data-col="0"
            >
              <div class="cell points">
                <div class="cell-inner">200</div>
                <div class="front answer">
                  are useful when you want to arrange text and images in order to
                  make the information straightforward and clear to the Web page
                  visitor.
                </div>
                <div class="back question">What are tables</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615110"
              data-row="2"
              data-col="1"
            >
              <div class="cell points">
                <div class="cell-inner">200</div>
                <div class="front answer">
                  A(n) _________________________ tag is used to define the
                  clickable areas within a element, as well as links and anchors.
                </div>
                <div class="back question">What is <area /></div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615120"
              data-row="2"
              data-col="2"
            >
              <div class="cell points">
                <div class="cell-inner">200</div>
                <div class="front answer">
                  A(n) ____________________ control creates a list item in a list
                  from which more than one item can be chosen.
                </div>
                <div class="back question">What is a checkbox</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615130"
              data-row="2"
              data-col="3"
            >
              <div class="cell points">
                <div class="cell-inner">200</div>
                <div class="front answer">
                  A(n) ____ style sheet is used to change the style within an
                  individual HTML tag.
                </div>
                <div class="back question">What is inline</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615140"
              data-row="2"
              data-col="4"
            >
              <div class="cell points">
                <div class="cell-inner">200</div>
                <div class="front answer">
                  File ____________________ can result in smaller file size.
                </div>
                <div class="back question">What is compression</div>
              </div>
            </div>
          </div>
  
          <div class="grid-row grid-row-questions">
            <div
              class="cell-group grid-cell"
              id="cell-112615102"
              data-row="3"
              data-col="0"
            >
              <div class="cell points">
                <div class="cell-inner">300</div>
                <div class="front answer">
                  A heading cell displays text as bold and ____.
                </div>
                <div class="back question">What is centered</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615112"
              data-row="3"
              data-col="1"
            >
              <div class="cell points">
                <div class="cell-inner">300</div>
                <div class="front answer">
                  Before coding the image map, you must map the image ____ for
                  each
                </div>
                <div class="back question">What are coordinates</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615122"
              data-row="3"
              data-col="2"
            >
              <div class="cell points">
                <div class="cell-inner">300</div>
                <div class="front answer">
                  The ____________________ button sends the information to the
                  appropriate location for processing.
                </div>
                <div class="back question">What is submit</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615132"
              data-row="3"
              data-col="3"
            >
              <div class="cell points">
                <div class="cell-inner">300</div>
                <div class="front answer">
                  To link a style sheet to a Web page, the tag must use
                  "____________________" as the value for the rel property.
                </div>
                <div class="back question">What is stylesheet</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615142"
              data-row="3"
              data-col="4"
            >
              <div class="cell points">
                <div class="cell-inner">300</div>
                <div class="front answer">
                  One of the most popular formats for music storage
                </div>
                <div class="back question">What is mp3</div>
              </div>
            </div>
          </div>
  
          <div class="grid-row grid-row-questions">
            <div
              class="cell-group grid-cell"
              id="cell-112615104"
              data-row="4"
              data-col="0"
            >
              <div class="cell points">
                <div class="cell-inner">400</div>
                <div class="front answer">
                  There are ____ main HTML tags used to create a table.
                </div>
                <div class="back question">What is four</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615114"
              data-row="4"
              data-col="1"
            >
              <div class="cell points">
                <div class="cell-inner">400</div>
                <div class="front answer">
                  The __ -axis runs vertically on the image.
                </div>
                <div class="back question">What is the y axis</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615124"
              data-row="4"
              data-col="2"
            >
              <div class="cell points">
                <div class="cell-inner">400</div>
                <div class="front answer">
                  The use of asterisks, for example, to mark the entered text in
                  this kind of field is designed to help protect text from being
                  observed as it is being entered
                </div>
                <div class="back question">What is a password</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615134"
              data-row="4"
              data-col="3"
            >
              <div class="cell points">
                <div class="cell-inner">400</div>
                <div class="front answer">
                  The ____________________ area surrounds the page area, and is
                  transparent.
                </div>
                <div class="back question">What is a margin</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615144"
              data-row="4"
              data-col="4"
            >
              <div class="cell points">
                <div class="cell-inner">400</div>
                <div class="front answer">
                  Its sound quality is not as good as other formats
                </div>
                <div class="back question">What is Real Audio</div>
              </div>
            </div>
          </div>
  
          <div class="grid-row grid-row-questions grid-last-row">
            <div
              class="cell-group grid-cell"
              id="cell-112615106"
              data-row="5"
              data-col="0"
            >
              <div class="cell points">
                <div class="cell-inner">500</div>
                <div class="front answer">
                  A ____ is a horizontal line of information.
                </div>
                <div class="back question">What is a row</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615116"
              data-row="5"
              data-col="1"
            >
              <div class="cell points">
                <div class="cell-inner">500</div>
                <div class="front answer">
                  When an image is used as a link, the entire image becomes the
                  ____ area, also called the hotspot.
                </div>
                <div class="back question">
                  What is a clickable area or clickable element
                </div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615126"
              data-row="5"
              data-col="2"
            >
              <div class="cell points">
                <div class="cell-inner">500</div>
                <div class="front answer">
                  Nearly all of the HTML tags used to create forms have at most
                  one of these each
                </div>
                <div class="back question">What is an attribute</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615136"
              data-row="5"
              data-col="3"
            >
              <div class="cell points">
                <div class="cell-inner">500</div>
                <div class="front answer">
                  Used to add special effects to some selectors
                </div>
                <div class="back question">What is a pseudoclass</div>
              </div>
            </div>
  
            <div
              class="cell-group grid-cell"
              id="cell-112615146"
              data-row="5"
              data-col="4"
            >
              <div class="cell points">
                <div class="cell-inner">500</div>
                <div class="front answer">
                  A Java ____ is a program written in the Java programming
                  language that can be included in a Web page.
                </div>
                <div class="back question">What is an applet</div>
              </div>
            </div>
          </div>
  
          <div class="click-to-zoom">
            <span>Click to zoom</span>
          </div>
        </div>
  
        <div id="teams">
          <a class="menu-picker" href="javascript:backToMenu('menu')">
            M<br />e<br />n<br />u
          </a>
          <div
            style="
              display: flex;
              margin-left: auto;
              margin-right: auto;
              overflow: auto;
            "
          >
            <div class="team" style="display: none">
              <h3 class="name" contenteditable="true">Team 1</h3>
              <h3 class="points" contenteditable="true">0</h3>
              <div class="pointer">
                <span class="plus">+</span>
                <span class="minus">-</span>
              </div>
            </div>
          </div>
        </div>
  
        <div id="question-modal" class="modal-wrapper">
          <div id="modal-header">
            <div id="continue-button">
              <div>Continue <kbd>ESC</kbd></div>
            </div>
            <div id="question-title"></div>
            <div id="answer-button">
              <div>Reveal Correct Response <kbd>Spacebar</kbd></div>
            </div>
          </div>
          <div class="modal-body">
            <div class="modal-inner"></div>
          </div>
        </div>
      </div>
  
      <div id="options" class="modal-wrapper">
        <div class="modal">
          <h1>HTML Jeopardy</h1>
  
          <div id="team-chooser-wrapper">
            <select id="team-chooser">
              <option value="0">No teams</option>
              <option value="1">1 team</option>
              <option value="2">2 teams</option>
              <option value="3">3 teams</option>
              <option value="4" selected="true">4 teams</option>
              <option value="5">5 teams</option>
              <option value="6">6 teams</option>
              <option value="7">7 teams</option>
              <option value="8">8 teams</option>
              <option value="9">9 teams</option>
              <option value="10">10 teams</option>
              <option id="last-option" value="more">Custom</option>
            </select>
            <input
              class="submit"
              type="button"
              id="submit"
              value="Start"
              onclick="game.init()"
            />
            <span id="reset-all">
              <input type="button" id="re-init" value="Reset" />
            </span>
          </div>
  
          <p id="fullscreen" style="display: none" align="center">
            <span id="windows" style="display: none">Press <kbd>F11</kbd></span>
            <span id="mac" style="display: none"
              >Select menu option <kbd>View &gt; Enter Fullscreen</kbd></span
            >
            for full-screen mode
          </p>
          <script>
            if (window.navigator.platform.indexOf("Mac") == 0) {
              document.getElementById("fullscreen").style.display = "block";
              document.getElementById("mac").style.display = "inline";
            } else if (window.navigator.platform.indexOf("Win") == 0) {
              document.getElementById("fullscreen").style.display = "block";
              document.getElementById("windows").style.display = "inline";
            }
          </script>
  
          <div align="center" id="menu-links">
            <a
              href="https://jeopardylabs.com/edit/html-jeopardy-44"
              rel="nofollow"
              >Edit</a
            >
          </div>
        </div>
      </div>
  
      <script type="text/javascript">
        var gaJsHost =
          "https:" == document.location.protocol ? "https://ssl." : "http://www.";
        document.write(
          unescape(
            "%3Cscript src='" +
              gaJsHost +
              "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"
          )
        );
      </script>
      <script type="text/javascript">
        try {
          var pageTracker = _gat._getTracker("UA-6553843-3");
          pageTracker._trackPageview();
        } catch (err) {}
      </script>
    </body>
  </html>
  `);
};
