var args = process.argv, sum = 0;
for (var i=2, l=args.length; i<l; i++) {
    sum += Number(args[i]);
}

console.log(sum);
