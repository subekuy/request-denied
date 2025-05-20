
    const params = new URLSearchParams(window.location.search);
    const reason = params.get("b");

    if (reason === "yc") {
      document.getElementById("message").innerHTML =
        'Access from <strong>your country</strong> has been <strong>restricted</strong>.';
    }