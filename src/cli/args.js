const parseArgs = () => {
    const [node, file, ...args] = process.argv;

    const orderedArgs = {};
    for (let i = 0; i < args.length; i += 2) {
        const name = args[i].substring(2);
        const value = args[i + 1];
        orderedArgs[name] = value;
        console.log(`${name} is ${value}`);
    }
};

parseArgs();