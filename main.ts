
/*
{"url":"https://api.github.com/user","method":"GET"}
{
    avatar_url: "https://avatars3.githubusercontent.com/u/6453828?v=4"
    bio: "I work on MakeCode, a platform for teaching computer science using physical computing and games."
    blog: "darzu.io"
    company: null
    created_at: "2014-01-20T19:42:21Z"
    email: null
    events_url: "https://api.github.com/users/darzu/events{/privacy}"
    followers: 11
    followers_url: "https://api.github.com/users/darzu/followers"
    following: 10
    following_url: "https://api.github.com/users/darzu/following{/other_user}"
    gists_url: "https://api.github.com/users/darzu/gists{/gist_id}"
    gravatar_id: ""
    hireable: null
    html_url: "https://github.com/darzu"
    id: 6453828
    location: null
    login: "darzu"
    name: "Daryl Zuniga"
    node_id: "MDQ6VXNlcjY0NTM4Mjg="
    organizations_url: "https://api.github.com/users/darzu/orgs"
    public_gists: 2
    public_repos: 102
    received_events_url: "https://api.github.com/users/darzu/received_events"
    repos_url: "https://api.github.com/users/darzu/repos"
    site_admin: false
    starred_url: "https://api.github.com/users/darzu/starred{/owner}{/repo}"
    subscriptions_url: "https://api.github.com/users/darzu/subscriptions"
    twitter_username: null
    type: "User"
    updated_at: "2021-01-10T18:41:13Z"
    url: "https://api.github.com/users/darzu"
}

{"url":"https://api.github.com/user/repos","method":"POST","data":{"name":"arcade-test-git","description":"A MakeCode project","private":false,"has_issues":true,"has_projects":false,"has_wiki":false,"allow_rebase_merge":false,"allow_merge_commit":true,"delete_branch_on_merge":false},"successCodes":[200,201,202,204]}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/contents/.gitignore","method":"PUT","allowHttpErrors":true,"data":{"message":"Initialize empty repo","content":"IyBNYWtlQ29kZQpidWlsdApub2RlX21vZHVsZXMKeW90dGFfbW9kdWxlcwp5b3R0YV90YXJnZXRzCnB4dF9tb2R1bGVzCl9zaXRlCiouZGIKKi50Z3oKLmhlYWRlci5qc29uCi5zaW1zdGF0ZS5qc29uCg==","branch":"master"},"successCodes":[201]}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/refs/heads/master","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/commits/e32e71966617273d43538408d553466a63acdde9","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/trees/d6e97130be5214bff3f42a1786626ab90cf3d102?recursive=1","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/blobs","method":"POST","data":{"content":"{\n    \"compilerOptions\": {\n        \"target\": \"es5\",\n        \"noImplicitAny\": true,\n        \"outDir\": \"built\",\n        \"rootDir\": \".\"\n    },\n    \"exclude\": []\n}\n","encoding":"utf-8"},"successCodes":[200,201,202,204]}
    { "sha": "a2079ff63abbe4ada5111fdd6b4918aa4514a7eb", "url": "https://api.github.com/repos/darzu/arcade-test-git/git/blobs/a2079ff63abbe4ada5111fdd6b4918aa4514a7eb" }
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/trees","method":"POST","data":{ ... },"successCodes":[200,201,202,204]}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/commits","method":"POST","data":{"message":"Initial files for MakeCode project","parents":["e32e71966617273d43538408d553466a63acdde9"],"tree":"21b03d0b597c9656426cd11260a2b90a67e3038f"},"successCodes":[200,201,202,204]}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/refs/heads/master","method":"PATCH","allowHttpErrors":true,"data":{"sha":"ee7cd8cfb529cd9828006000f541d221a2222314","force":false}}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/commits/ee7cd8cfb529cd9828006000f541d221a2222314","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/trees/21b03d0b597c9656426cd11260a2b90a67e3038f?recursive=1","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/pages","method":"GET"}
    VM4146:1 GET https://api.github.com/repos/darzu/arcade-test-git/pages?rnd=0.7180813848403003 404 (Not Found)
{"url":"https://api.github.com/repos/darzu/arcade-test-git/pages","headers":{"Accept":"application/vnd.github.switcheroo-preview+json"},"method":"POST","data":{"source":{"branch":"master","path":"/"}},"successCodes":[200,201,202,204]}
{"url":"https://api.github.com/repos/darzu/arcade-test-git","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git","method":"PATCH","data":{"homepage":"http://darzu.io/arcade-test-git/"},"successCodes":[200,201,202,204]}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/refs/heads/master","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/refs/heads/master","method":"GET"}
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/refs/heads/master","method":"GET"}
....
{"url":"https://api.github.com/repos/darzu/arcade-test-git/git/refs/heads/master","method":"GET"}

*/
namespace git.gitserver {
    export function initGitServer() {
        console.log("Hello from initGitServer")
    }
}

console.log("Hello from local git server")

self.onmessage = function(e: MessageEvent) {
    console.log('Worker: Message received from main page');
    console.dir(e.data);
    self.postMessage('Thanks!');
}
