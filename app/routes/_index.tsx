import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { LikeIcon } from "~/components/icons/like";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<nav className="flex flex-col items-center justify-center gap-4 ">
					<p className="leading-6">Hello world</p>
					{Array.from({ length: 3 }, (_, i) => (
						<Button key={i}>
							<LikeIcon />
						</Button>
					))}
				</nav>
			</div>
		</div>
	);
}
