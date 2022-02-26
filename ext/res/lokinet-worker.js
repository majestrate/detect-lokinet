
onmessage = (event) => {
  const lookup = async (name) => { return await browser.dns.resolve(name, ["bypass_cache", "disable_trr", "canonical_name"]); };
  try
  {
    const res = lookup("localhost.loki");
    const exit = lookup("exit.localhost.loki");
    postMessage({error: null, connected: !(!res.canonicalName), exit: !(!exit.canonicalName)});
  }
  catch(ex)
  {
    postMessage({error: "error: "+ex});
  }
};
