// This file is automatically generated by pgen/astgen.py

function astDump(node)
{
    if (node === null) return "null";
    if (typeof node === "string") return node;
    if (typeof node === "boolean") return node;
    if (typeof node === "number") return node;
    if (Object.prototype.toString.apply(node) === '[object Array]')
    {
        var ret = '';
        for (var i = 0; i < node.length; ++i)
        {
            ret += astDump(node[i]);
            if (i != node.length - 1) ret += ",";
        }
        return ret;
    }


if (node.nodeName === 'Add') {
    return sprintf("Add(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'And') {
    return sprintf("And(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'AssAttr') {
    return sprintf("AssAttr(expr=%s, attrname=%s, flags=%s)", astDump(node.expr), astDump(node.attrname), astDump(node.flags));
}

if (node.nodeName === 'AssList') {
    return sprintf("AssList(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'AssName') {
    return sprintf("AssName(name=%s, flags=%s)", astDump(node.name), astDump(node.flags));
}

if (node.nodeName === 'AssTuple') {
    return sprintf("AssTuple(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Assert') {
    return sprintf("Assert(test=%s, fail=%s)", astDump(node.test), astDump(node.fail));
}

if (node.nodeName === 'Assign') {
    return sprintf("Assign(nodes=%s, expr=%s)", astDump(node.nodes), astDump(node.expr));
}

if (node.nodeName === 'AugAssign') {
    return sprintf("AugAssign(node=%s, op=%s, expr=%s)", astDump(node.node), astDump(node.op), astDump(node.expr));
}

if (node.nodeName === 'Backquote') {
    return sprintf("Backquote(expr=%s)", astDump(node.expr));
}

if (node.nodeName === 'Bitand') {
    return sprintf("Bitand(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Bitor') {
    return sprintf("Bitor(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Bitxor') {
    return sprintf("Bitxor(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Break_') {
    return "Break_()";
}

if (node.nodeName === 'CallFunc') {
    return sprintf("CallFunc(node=%s, args=%s, star_args=%s, dstar_args=%s)", astDump(node.node), astDump(node.args), astDump(node.star_args), astDump(node.dstar_args));
}

if (node.nodeName === 'Class_') {
    return sprintf("Class_(name=%s, bases=%s, doc=%s, code=%s, decorators=%s)", astDump(node.name), astDump(node.bases), astDump(node.doc), astDump(node.code), astDump(node.decorators));
}

if (node.nodeName === 'Compare') {
    return sprintf("Compare(expr=%s, ops=%s)", astDump(node.expr), astDump(node.ops));
}

if (node.nodeName === 'Const_') {
    return sprintf("Const_(value=%s)", astDump(node.value));
}

if (node.nodeName === 'Continue_') {
    return "Continue_()";
}

if (node.nodeName === 'Decorators') {
    return sprintf("Decorators(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Dict') {
    return sprintf("Dict(items=%s)", astDump(node.items));
}

if (node.nodeName === 'Discard') {
    return sprintf("Discard(expr=%s)", astDump(node.expr));
}

if (node.nodeName === 'Div') {
    return sprintf("Div(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'Ellipsis') {
    return "Ellipsis()";
}

if (node.nodeName === 'Exec') {
    return sprintf("Exec(expr=%s, locals=%s, globals=%s)", astDump(node.expr), astDump(node.locals), astDump(node.globals));
}

if (node.nodeName === 'FloorDiv') {
    return sprintf("FloorDiv(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'For_') {
    return sprintf("For_(assign=%s, list=%s, body=%s, else_=%s)", astDump(node.assign), astDump(node.list), astDump(node.body), astDump(node.else_));
}

if (node.nodeName === 'From') {
    return sprintf("From(modname=%s, names=%s, level=%s)", astDump(node.modname), astDump(node.names), astDump(node.level));
}

if (node.nodeName === 'Function_') {
    return sprintf("Function_(decorators=%s, name=%s, argnames=%s, defaults=%s, varargs=%s, kwargs=%s, doc=%s, code=%s)", astDump(node.decorators), astDump(node.name), astDump(node.argnames), astDump(node.defaults), astDump(node.varargs), astDump(node.kwargs), astDump(node.doc), astDump(node.code));
}

if (node.nodeName === 'GenExpr') {
    return sprintf("GenExpr(code=%s)", astDump(node.code));
}

if (node.nodeName === 'GenExprFor') {
    return sprintf("GenExprFor(assign=%s, iter=%s, ifs=%s)", astDump(node.assign), astDump(node.iter), astDump(node.ifs));
}

if (node.nodeName === 'GenExprIf') {
    return sprintf("GenExprIf(test=%s)", astDump(node.test));
}

if (node.nodeName === 'GenExprInner') {
    return sprintf("GenExprInner(expr=%s, quals=%s)", astDump(node.expr), astDump(node.quals));
}

if (node.nodeName === 'GenExprTransformed') {
    return sprintf("GenExprTransformed(node=%s)", astDump(node.node));
}

if (node.nodeName === 'Getattr') {
    return sprintf("Getattr(expr=%s, attrname=%s)", astDump(node.expr), astDump(node.attrname));
}

if (node.nodeName === 'Global') {
    return sprintf("Global(names=%s)", astDump(node.names));
}

if (node.nodeName === 'IfExp') {
    return sprintf("IfExp(test=%s, then=%s, else_=%s)", astDump(node.test), astDump(node.then), astDump(node.else_));
}

if (node.nodeName === 'If_') {
    return sprintf("If_(tests=%s, else_=%s)", astDump(node.tests), astDump(node.else_));
}

if (node.nodeName === 'Import_') {
    return sprintf("Import_(names=%s)", astDump(node.names));
}

if (node.nodeName === 'Interactive') {
    return sprintf("Interactive(node=%s)", astDump(node.node));
}

if (node.nodeName === 'Invert') {
    return sprintf("Invert(expr=%s)", astDump(node.expr));
}

if (node.nodeName === 'Keyword') {
    return sprintf("Keyword(name=%s, expr=%s)", astDump(node.name), astDump(node.expr));
}

if (node.nodeName === 'Lambda') {
    return sprintf("Lambda(argnames=%s, defaults=%s, varargs=%s, kwargs=%s, code=%s)", astDump(node.argnames), astDump(node.defaults), astDump(node.varargs), astDump(node.kwargs), astDump(node.code));
}

if (node.nodeName === 'LeftShift') {
    return sprintf("LeftShift(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'List') {
    return sprintf("List(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'ListComp') {
    return sprintf("ListComp(expr=%s, quals=%s)", astDump(node.expr), astDump(node.quals));
}

if (node.nodeName === 'ListCompFor') {
    return sprintf("ListCompFor(assign=%s, list=%s, ifs=%s)", astDump(node.assign), astDump(node.list), astDump(node.ifs));
}

if (node.nodeName === 'ListCompIf') {
    return sprintf("ListCompIf(test=%s)", astDump(node.test));
}

if (node.nodeName === 'Mod') {
    return sprintf("Mod(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'Module') {
    return sprintf("Module(doc=%s, node=%s)", astDump(node.doc), astDump(node.node));
}

if (node.nodeName === 'Mul') {
    return sprintf("Mul(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'Name') {
    return sprintf("Name(name=%s)", astDump(node.name));
}

if (node.nodeName === 'Not') {
    return sprintf("Not(expr=%s)", astDump(node.expr));
}

if (node.nodeName === 'Or') {
    return sprintf("Or(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Pass') {
    return "Pass()";
}

if (node.nodeName === 'Power') {
    return sprintf("Power(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'Print') {
    return sprintf("Print(nodes=%s, dest=%s, nl=%s)", astDump(node.nodes), astDump(node.dest), astDump(node.nl));
}

if (node.nodeName === 'Raise') {
    return sprintf("Raise(expr1=%s, expr2=%s, expr3=%s)", astDump(node.expr1), astDump(node.expr2), astDump(node.expr3));
}

if (node.nodeName === 'Return_') {
    return sprintf("Return_(value=%s)", astDump(node.value));
}

if (node.nodeName === 'RightShift') {
    return sprintf("RightShift(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'Slice') {
    return sprintf("Slice(expr=%s, flags=%s, lower=%s, upper=%s)", astDump(node.expr), astDump(node.flags), astDump(node.lower), astDump(node.upper));
}

if (node.nodeName === 'Sliceobj') {
    return sprintf("Sliceobj(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Stmt') {
    return sprintf("Stmt(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'Sub') {
    return sprintf("Sub(left=%s, right=%s)", astDump(node.left), astDump(node.right));
}

if (node.nodeName === 'Subscript') {
    return sprintf("Subscript(expr=%s, flags=%s, subs=%s)", astDump(node.expr), astDump(node.flags), astDump(node.subs));
}

if (node.nodeName === 'TryExcept') {
    return sprintf("TryExcept(body=%s, handlers=%s, else_=%s)", astDump(node.body), astDump(node.handlers), astDump(node.else_));
}

if (node.nodeName === 'TryFinally') {
    return sprintf("TryFinally(body=%s, final_=%s)", astDump(node.body), astDump(node.final_));
}

if (node.nodeName === 'Tuple') {
    return sprintf("Tuple(nodes=%s)", astDump(node.nodes));
}

if (node.nodeName === 'UnaryAdd') {
    return sprintf("UnaryAdd(expr=%s)", astDump(node.expr));
}

if (node.nodeName === 'UnarySub') {
    return sprintf("UnarySub(expr=%s)", astDump(node.expr));
}

if (node.nodeName === 'While_') {
    return sprintf("While_(test=%s, body=%s, else_=%s)", astDump(node.test), astDump(node.body), astDump(node.else_));
}

if (node.nodeName === 'With_') {
    return sprintf("With_(expr=%s, vars=%s, body=%s)", astDump(node.expr), astDump(node.vars), astDump(node.body));
}

if (node.nodeName === 'Yield_') {
    return sprintf("Yield_(value=%s)", astDump(node.value));
}

}

