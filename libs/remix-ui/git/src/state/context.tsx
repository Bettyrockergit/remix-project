import { ReadCommitResult } from "isomorphic-git"
import React from "react"
import { branch, commitChange, gitLog, gitState, remote } from "../types"

export interface gitActions {
    removeRemote(remote: remote): void
    clone(url: string, path: string, depth: number, singleBranch: boolean): Promise<void>
    add(path: string): Promise<void>
    rm(path: string): Promise<void>
    commit(message: string): Promise<any>
    addall(): Promise<void>
    push(remote?: string, ref?: string, remoteRef?: string, force?: boolean): Promise<void>
    pull(remote?: string, ref?: string, remoteRef?: string): Promise<void>
    fetch(remote?: string, ref?: string, remoteRef?: string, depth?: number, singleBranch?: boolean, relative?: boolean, quiet?: boolean): Promise<void>
    repositories(): Promise<any>
    checkoutfile(file: string): Promise<void>
    checkout(cmd: any): Promise<void>
    createBranch(branch: string): Promise<void>
    remoteBranches(owner: string, repo: string): Promise<any>
    getCommitChanges(oid1: string, oid2: string, branch?: branch, remote?: remote): Promise<commitChange[] | boolean>
    getBranchCommits(branch: branch, page: number): Promise<void>
    getBranchDifferences(branch: branch, remote?: remote, state?: gitState): Promise<void>
    getGitHubUser(): Promise<any>
    diff(commitChange: commitChange): Promise<void>
    resolveRef(ref: string): Promise<string>
    setUpstreamRemote(upstream: remote): Promise<void>
    getBranches: () => Promise<void>
    getRemotes: () => Promise<void>
    setDefaultRemote: (remote: remote) => Promise<void>
    addRemote: (remote: remote) => Promise<void>
    sendToGitLog: (message: gitLog) => Promise<void>
    clearGitLog: () => Promise<void>
}

export const gitActionsContext = React.createContext<gitActions>(null)

export interface pluginActions {
    statusChanged(data: any): void
    loadFiles(): void
    openFile(path: string): Promise<void>
    openDiff(change: commitChange): Promise<void>
    saveToken(token: string): Promise<void>
    saveGitHubCredentials({
      username,
      email,
      token
    }): Promise<void>
    getGitHubCredentials(): Promise<{
        username: string
        email: string
        token: string
    }>
}

export const pluginActionsContext = React.createContext<pluginActions>(null)