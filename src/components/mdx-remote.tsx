import { MDXRemote as MDXRemoteRSC } from "next-mdx-remote/rsc";

export function MDXRemote({ source }: { source: string }) {
  return <MDXRemoteRSC source={source} />;
}
