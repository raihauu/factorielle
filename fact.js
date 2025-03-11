function factorielle(n) {
    if (n == 0) return 1;
    return factorielle(n-1) * n;
}