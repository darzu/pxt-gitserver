namespace git.gitserver {
    export function initGitServer() {
        console.log("Hello from initGitServer")
    }
}

console.log("Hello from local git server")

const trgOrigin = self.origin
self.onmessage = function(e: MessageEvent) {
    console.log('Worker: Message received from main page');
    console.dir(e.data);
    self.postMessage('Thanks!');
}
