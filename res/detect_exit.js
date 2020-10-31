const doit = async () => {
  const lookup = async (name) => { return await browser.dns.resolve(name, ["bypass_cache", "disable_trr", "canonical_name"]); };
  const loki = await lookup("localhost.loki");
  const exit = await lookup("exit.localhost.loki");
  console.log(loki);
  console.log(exit);
  {
    var elem = document.getElementById("status");
    if(elem)
    {
      elem.innerText = "lokinet detector";
    }
  }
  {
    var elem = document.getElementById("loki-addr");
    if(elem && loki.canonicalName)
    {
        elem.innerText = "our address: " + loki.canonicalName;
    }
  }
  {
    var elem = document.getElementById("exit-node");
    if(elem && exit.canonicalName)
    {
      elem.innerText = "exit node: " + exit.canonicalName;
    }
  }
}

doit();
