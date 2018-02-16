export default `<?xml version = "1.0" ?> <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title></title>
    <style type="text/css">
      body {
        font-family: 'Roboto Condensed','Droid Sans',arial,sans-serif;
        font-size: 15px;
        color: rgba(0,0,0,0.8);
        word-wrap: break-word;
        background-color: #e8e8e8;
      }

      hr {
        display: block;
        margin: 10px 5px;
        border-style: inset dashed;
        border-width: 1px;
      }

      figure {
        -webkit-margin-before:0em;
        -webkit-margin-after:0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
      }

      figure figcaption {
        text-align: center;
      }

      .note figure {
        padding: 12px 15px 15px 15px;
      }

      img {
        max-width: 100%;
      }

      .note {
        outline: none;
        box-shadow: 0 2px 1px rgba(0,0,0,0.08);
        box-sizing: border-box;

        max-width: 600px;
        min-width: 240px;
        margin: 20px;

        background-color: rgb(255, 255, 255);
      }

      .note .heading {
        font-size: 12px;
        padding: 15px 15px 0;
        color: rgba(100,100,100,0.8);
      }

      .note .title {
        font-size: 17px;
        font-weight: bold;
        padding: 15px 15px 0;
        min-height: 28px;
      }

      .note .content {
        padding: 12px 15px 15px;
        font-family: 'Roboto Slab','Times New Roman',serif;
        font-size: 14px;
      }

      .note .attachments {
        padding: 0 15px 15px;
      }

      .attachments ul {
        padding: 0;
        margin: 0;
      }

      .attachments li {
        list-style-type: none;
        margin-top: 12px;
      }

      .attachments li img {
        max-width: 100%;
      }

      .attachments .audio {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIj4KPHBhdGggZD0ibTEgN3Y2aDRsNSA1di0xNmwtNSA1aC00em0xMy41IDNjMC0xLjgtMS0zLjMtMi41LTR2OGMxLjUtMC43IDIuNS0yLjIgMi41LTR6bS0yLjUtOC44djIuMWMyLjkgMC45IDUgMy41IDUgNi43cy0yLjEgNS44LTUgNi43djIuMWM0LTAuOSA3LTQuNSA3LTguOHMtMy03LjktNy04Ljh6Ii8+Cjwvc3ZnPgo=");
        background-size: 18px 18px;
        background-repeat: no-repeat;
        background-position: center;
        width: 22px;
        height: 22px;
        display: block;
      }

      .note .listitem {}

      .note .listitem .bullet {
        position: absolute;
      }

      .note .listitem .text {
        margin-left: 20px;
      }

      .note .labels {
        padding: 12px 15px 15px;
      }

      .note .label {
        max-width: 198px;
        margin: 2px 4px 2px 0;
        padding: 2px 5px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.7);
        font-size: 11px;
        font-family: 'Roboto','Droid Sans',arial,sans-serif;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .archived {
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPCFET0NUWVBFIHN2ZyAgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxOCAxOCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4Ij4KPHBhdGggZD0ibTE2LjYgM2wtMS4yLTEuNWMtMC4yLTAuMy0wLjYtMC41LTEtMC41aC0xMC43Yy0wLjQgMC0wLjggMC4yLTEgMC41bC0xLjMgMS41Yy0wLjIgMC4zLTAuNCAwLjctMC40IDEuMXYxMS4xYzAgMSAwLjggMS44IDEuOCAxLjhoMTIuNGMxIDAgMS44LTAuOCAxLjgtMS44di0xMS4xYzAtMC40LTAuMi0wLjgtMC40LTEuMXptLTcuNiAxMC45bC00LjktNC45aDMuMXYtMS44aDMuNnYxLjhoMy4xbC00LjkgNC45em0tNi4xLTExLjFsMC43LTAuOWgxMC43bDAuOCAwLjloLTEyLjJ6Ii8+Cjwvc3ZnPgo=");
        background-size: 18px 18px;
        background-repeat: no-repeat;
        background-position: center;
        width: 22px;
        height: 22px;
        float: right;
      }

      .checked {
        text-decoration: line-through;
      }

      .RED {
        background-color: rgb(255, 109, 63) !important;
      }
      .ORANGE {
        background-color: rgb(255, 155, 0) !important;
      }
      .YELLOW {
        background-color: rgb(255, 218, 0) !important;
      }
      .GREEN {
        background-color: rgb(149, 214, 65) !important;
      }
      .TEAL {
        background-color: rgb(28, 232, 181) !important;
      }
      .BLUE {
        background-color: rgb(63, 195, 255) !important;
      }
      .GRAY {
        background-color: rgb(184, 196, 201) !important;
      }
    </style>
  </head>
  <body>
    <div class="note">
      <div class="heading">
      </div>
    </div>
  </body>
</html>`
