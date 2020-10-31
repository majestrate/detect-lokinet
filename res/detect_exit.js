const doit = async () => {
  const lookup = async (name) => { return await browser.dns.resolve(name, ["bypass_cache", "disable_trr", "canonical_name"]); };
  let lokiAddr = "";
  let exitNode = "";
  try
  {
    const loki = await lookup("localhost.loki");
    lokiAddr = loki.canonicalName;
  }
  catch(ex)
  {}
  try
  {
    const exit = await lookup("exit.localhost.loki");
    exitNode = exit.canonicalName;
  }
  catch(ex)
  {}
  {
    var elem = document.getElementById("status");
    if(elem)
    {
      elem.innerText = "lokinet detector";
    }
  }
  {
    var elem = document.getElementById("loki-addr");
    if(elem && lokiAddr)
    {
        elem.innerText = "our address: " + lokiAddr;
    }
  }
  {
    var elem = document.getElementById("exit-node");
    if(elem && exitNode)
    {
      elem.innerText = "exit node: " + exitNode;
    }
  }
}

doit();
