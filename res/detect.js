
const createImage = (color) => {
  const size = 48;
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
  ctx.fill();
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
  setIcon("red");
  setText("not connected to lokinet");
};

const LokinetEnabled = () => {
  setIcon("yellow");
  setText("connected to lokinet but with no exit");
};

const LokinetHasExit = () => {
  setIcon("green");
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
console.log("loaded");



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
