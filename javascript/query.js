


(function(){

//unit: a -> M[b]
var unit = function(value){
    return {
        value : function(){return value}
    };
};
//bind: M[a] -> (a->M[b]) -> M[b]
var bind = function(m,proc){
    return proc( m.value() );
};

// func a->M[b]
var x2 = function(x){return unit(x*x)};
var inc = function(x){return unit(x+1)};

//return a >>= f ≡ f a
print( bind( unit(10) , x2 ).value(), x2(10).value());
//m >>= return ≡ m
print( bind( unit(10) , unit ).value(),unit(10).value());

//(m >>= f) >>= g ≡ m >>= (\x -> f x >>= g)
print(
    bind( bind( unit(10) , x2 ) ,inc ).value(),
    bind( unit(10) , function(x){ return bind( x2(x) ,inc)}).value()
);

})();
