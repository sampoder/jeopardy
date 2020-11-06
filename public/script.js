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
      delimiters: [["`", "`"]],
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
      node.getAttribute("data-original") || "`" + node.innerText + "`";
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
    "\n" +
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