const parseEnv = () => {
    const allEnv = Object.entries(process.env);
    const filteredEnv = allEnv.filter(item => /^RSS_/.test(item[0]));
    for (const variable of filteredEnv) console.log(`${variable[0]}=${variable[1]}`);
};

parseEnv();