
const createImage = (color) => {
  const size = 32;
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

ctx.save();
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(32,0);
ctx.lineTo(32,32);
ctx.lineTo(0,32);
ctx.closePath();
ctx.clip();
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.save();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.beginPath();
ctx.moveTo(-1,-1);
ctx.lineTo(801,-1);
ctx.quadraticCurveTo(801,-1,801,-1);
ctx.lineTo(801,601);
ctx.quadraticCurveTo(801,601,801,601);
ctx.lineTo(-1,601);
ctx.quadraticCurveTo(-1,601,-1,601);
ctx.lineTo(-1,-1);
ctx.quadraticCurveTo(-1,-1,-1,-1);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.save();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(16.65803,5.22121);
ctx.bezierCurveTo(18.58463,5.22121,22.46351,5.19315,24.4158,5.17912);
ctx.lineTo(16.29797,12.29223);
ctx.bezierCurveTo(16.37503,7.37772,16.606659999999998,7.56415,16.65803,5.2212);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = color;
ctx.beginPath();
ctx.moveTo(16.56302,5.4898);
ctx.bezierCurveTo(18.992990000000002,5.510479999999999,21.422970000000003,5.52081,23.865470000000002,5.50014);
ctx.bezierCurveTo(23.71516,8.41537,24.729380000000003,13.18059,24.26741,14.163);
ctx.bezierCurveTo(23.80545,15.14541,24.309440000000002,16.91468,20.9863,18.24848);
ctx.bezierCurveTo(17.66315,19.58227,16.33756,9.552520000000001,16.56303,5.48981);
ctx.moveTo(18.70157,11.08083);
ctx.lineTo(18.42935,11.09284);
ctx.bezierCurveTo(18.42433,9.36466,18.7273,9.1906,19.17551,8.41501);
ctx.bezierCurveTo(19.31329,8.25994,20.61049,6.960990000000001,20.94859,6.56554);
ctx.bezierCurveTo(19.75689,6.928780000000001,18.83582,7.18008,18.00469,6.45227);
ctx.lineTo(17.73214,8.70713);
ctx.lineTo(17.47962,10.86183);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#00bf00";
ctx.beginPath();
ctx.moveTo(11.51,14.02987);
ctx.bezierCurveTo(12.969999999999999,12.519870000000001,14.45,11.019870000000001,15.94,9.53987);
ctx.bezierCurveTo(15.91,10.89987,15.94,12.259870000000001,16.009999999999998,13.61987);
ctx.bezierCurveTo(15.209999999999997,14.429870000000001,14.409999999999998,15.23987,13.609999999999998,16.049870000000002);
ctx.bezierCurveTo(12.919999999999998,15.369870000000002,12.209999999999997,14.689870000000003,11.509999999999998,14.029870000000003);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#00bf00";
ctx.beginPath();
ctx.moveTo(24.90592,11.74042);
ctx.bezierCurveTo(24.9848,11.543610000000001,26.00723,11.58174,26.085169999999998,11.66471);
ctx.bezierCurveTo(26.16311,11.747689999999999,26.149449999999998,17.72487,26.177819999999997,19.20987);
ctx.bezierCurveTo(25.41764,18.819869999999998,21.695809999999998,19.163169999999997,23.034279999999995,17.679869999999998);
ctx.bezierCurveTo(24.372739999999997,16.196569999999998,24.827049999999996,11.937219999999996,24.905929999999994,11.740409999999997);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#00bf00";
ctx.beginPath();
ctx.moveTo(5.97,12.45987);
ctx.bezierCurveTo(7,13.47987,8.03,14.48987,9.07,15.50987);
ctx.bezierCurveTo(9.040000000000001,16.26987,8.99,17.77987,8.97,18.52987);
ctx.bezierCurveTo(11.33,20.819869999999998,13.74,23.05987,16.15,25.28987);
ctx.bezierCurveTo(15.429999999999998,25.99987,14.719999999999999,26.709870000000002,13.999999999999998,27.41987);
ctx.bezierCurveTo(11.309999999999999,24.79987,8.729999999999999,22.07987,6.009999999999998,19.49987);
ctx.bezierCurveTo(5.999999999999998,17.14987,5.979999999999998,14.799870000000002,5.969999999999998,12.459870000000002);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "#00bf00";
ctx.beginPath();
ctx.moveTo(17.36093,16.85923);
ctx.bezierCurveTo(17.57952,16.68875,19.3509,18.63106,19.45994,18.81997);
ctx.bezierCurveTo(19.56898,19.00888,17.81719,20.600640000000002,17.91911,20.53077);
ctx.bezierCurveTo(18.02103,20.4609,15.80889,18.4185,15.80994,18.40997);
ctx.bezierCurveTo(15.811,18.40144,17.14234,17.02971,17.36093,16.85923);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "#1c1c1c";
ctx.beginPath();
ctx.moveTo(5.97,12.49994);
ctx.bezierCurveTo(9.21,9.199940000000002,12.45,5.909940000000001,15.84,2.77994);
ctx.bezierCurveTo(18.74,4.18994,21.939999999999998,3.9999399999999996,24.990000000000002,3.27994);
ctx.bezierCurveTo(24.950000000000003,5.9999400000000005,25.168560000000003,9.10943,25.290000000000003,11.43994);
ctx.bezierCurveTo(25.411440000000002,13.77045,24.549580000000002,16.04984,23.139580000000002,17.65984);
ctx.bezierCurveTo(23.819580000000002,18.039839999999998,25.430000000000003,18.859939999999998,26.1,19.24994);
ctx.bezierCurveTo(22.86,22.72994,19.43,26.04994,16.01,29.36994);
ctx.bezierCurveTo(15.340000000000002,28.72994,14.670000000000002,28.09994,14.000000000000002,27.45994);
ctx.bezierCurveTo(14.720000000000002,26.74994,15.430000000000001,26.03994,16.150000000000002,25.32994);
ctx.bezierCurveTo(17.860000000000003,23.70994,21.15275,20.42783,21.28,20.43994);
ctx.bezierCurveTo(21.40725,20.45205,20.09,19.34994,19.5,18.79994);
ctx.bezierCurveTo(18.60971,18.15029,18.07163,17.6085,17.44106,16.879269999999998);
ctx.bezierCurveTo(16.810480000000002,16.150039999999997,16.25,14.869939999999998,16.01,13.659939999999999);
ctx.bezierCurveTo(15.940000000000001,12.29994,15.910000000000002,10.939939999999998,15.940000000000001,9.579939999999999);
ctx.bezierCurveTo(15.96,8.819939999999999,15.990000000000002,7.289939999999999,16.01,6.519939999999998);
ctx.bezierCurveTo(13.970000000000002,8.539939999999998,11.920000000000002,10.529939999999998,9.880000000000003,12.539939999999998);
ctx.bezierCurveTo(10.280000000000003,12.919939999999999,11.100000000000003,13.679939999999998,11.510000000000002,14.069939999999997);
ctx.bezierCurveTo(12.21,14.729939999999997,12.920000000000002,15.409939999999997,13.610000000000001,16.08994);
ctx.bezierCurveTo(14.370000000000001,16.83994,15.120000000000001,17.609939999999998,15.850000000000001,18.38994);
ctx.bezierCurveTo(16.65022,19.29991,17.239780000000003,19.79984,17.99923,20.49071);
ctx.bezierCurveTo(17.169230000000002,21.29071,16.82,21.60994,15.99,22.40994);
ctx.bezierCurveTo(13.67,20.129939999999998,11.370000000000001,17.83994,9.07,15.54994);
ctx.bezierCurveTo(8.030000000000001,14.52994,7,13.51994,5.970000000000001,12.499939999999999);
ctx.moveTo(17.62,5.5499399999999985);
ctx.bezierCurveTo(17.469900000000003,5.511739999999999,16.637800000000002,11.328619999999997,17.55956,14.2594);
ctx.bezierCurveTo(18.48133,17.190179999999998,20.99671,17.65553,21.031180000000003,17.73158);
ctx.bezierCurveTo(21.100120000000004,17.883660000000003,23.14166,15.731480000000001,23.530510000000003,14.08004);
ctx.bezierCurveTo(23.919360000000005,12.4286,23.330000000000002,8.379940000000001,23.450000000000003,5.559940000000001);
ctx.bezierCurveTo(22.475,5.569940000000001,21.342950000000002,5.686700000000001,20.291920000000005,5.741330000000001);
ctx.bezierCurveTo(19.240890000000004,5.795960000000002,17.770090000000003,5.588140000000001,17.620000000000005,5.549940000000001);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
ctx.restore();
return ctx.getImageData(0, 0, size, size);

};

const lookup = async (name) => { return await browser.dns.resolve(name, ["bypass_cache", "disable_trr", "canonical_name"]); };

const setIcon = (color) => {
  browser.browserAction.setIcon({imageData: createImage(color)});
}

const setText = (text) => {
  browser.browserAction.setTitle({title: text});
  const elem = document.getElementById("status");
  if(elem)
    elem.innerText = text;
}

const LokinetNotDetected = () => {
  setIcon("#ff0000"); //red
  setText("not connected to lokinet");
};

const LokinetEnabled = () => {
  setIcon("#ffff00"); //amber
  setText("connected to lokinet but with no exit");
};

const LokinetHasExit = () => {
  setIcon("#00bf00"); //green
  setText("connected to lokinet");
};

const handleResolve = (obj) => {
  if(obj.error)
  {
    console.log(obj.error);
    LokinetNotDetected();
    return;
  }
  if(obj.connected)
  {
    if(obj.exit)
    {
      LokinetHasExit();
    }
    else
    {
      LokinetEnabled();
    }
  }
  else
  {
    LokinetNotDetected();
  }
};



const checkForLokinet = async () => {
  console.log("lookup");
  let obj = {};
  try
  {
    const res = await lookup("localhost.loki");
    obj.connected = res.canonicalName;
  }
  catch(ex)
  {
    obj.error = "error: " +ex;
  }
  try
  {
    const res = await lookup("exit.localhost.loki");
    obj.exit = res.canonicalName;
  }
  catch(ex) {}
  handleResolve(obj);
  browser.alarms.create("checkForLokinet", {delayInMinutes: 0.1});
};

browser.alarms.onAlarm.addListener(async (alarm) => { checkForLokinet(); });
checkForLokinet();


const state = {};

const injectLokinetBadge = (tabId) => {
  state[tabId] = "icons/lokinet-32.png";
}

const setPageAction = (tabId) => {
  let icon = state[tabId];
  if(!icon) return;
  browser.pageAction.show(tabId);
  browser.pageAction.setIcon({
    tabId: tabId,
    path: icon
  });
  browser.pageAction.setTitle({
    tabId: tabId,
    title: "connected via lokinet"
  });
};

const RESOURCE_TYPE_MAIN_FRAME = "main_frame";
const RESOURCE_TYPE_SUB_FRAME = "sub_frame";


browser.webRequest.onHeadersReceived.addListener(
  (e) => {
    if (e.tabId === -1 || (e.type !== RESOURCE_TYPE_MAIN_FRAME && e.type !== RESOURCE_TYPE_SUB_FRAME))
    {
      return;
    }
    const u = new URL(e.url);
    if(u.hostname.endsWith(".loki"))
    {
      injectLokinetBadge(e.tabId);
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);


browser.webNavigation.onCommitted.addListener((e) => {
  if (e.frameId === 0) {
    setPageAction(e.tabId);
  }
});

browser.tabs.onActivated.addListener((e) => {
  setPageAction(e.tabId);
});

browser.tabs.onRemoved.addListener((tabId) => {
  state[tabId] = null;
});
