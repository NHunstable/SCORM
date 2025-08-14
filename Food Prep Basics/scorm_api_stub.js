// Fake SCORM 1.2 API for standalone playback
var API = {
  LMSInitialize: function() { return "true"; },
  LMSFinish: function() { return "true"; },
  LMSGetValue: function(name) { return ""; },
  LMSSetValue: function(name, value) { return "true"; },
  LMSCommit: function() { return "true"; },
  LMSGetLastError: function() { return "0"; },
  LMSGetErrorString: function(code) { return "No error"; },
  LMSGetDiagnostic: function(code) { return ""; }
};
