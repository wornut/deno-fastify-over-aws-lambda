import type {
	RawReplyDefaultExpression,
	RawRequestDefaultExpression,
	RawServerDefault,
	RequestGenericInterface,
	RouteShorthandOptionsWithHandler,
} from 'npm:fastify'

declare global {
	export type CustomRouteShorthandOptionsWithHandler<
		TRequest extends RequestGenericInterface,
	> = RouteShorthandOptionsWithHandler<
		RawServerDefault,
		RawRequestDefaultExpression<RawServerDefault>,
		RawReplyDefaultExpression<RawServerDefault>,
		TRequest
	>
}
