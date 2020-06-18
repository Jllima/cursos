require 'pry-rails'
######## LAMBDA E PROC
# Aceita somente params estaticos
l = lambda {|param| param * 5}
p l.call(4)
# Outra sintax para lambdas com uma unica linha
l_s = ->(nomes) { nomes.each { |nome| p nome } }
l_s.call(%w[Jorge Luis Lima])

# Aceita params dinamicos
pr = proc {|param| 'Testando Proc'}
p pr.call(5, 6)

####### METODO DINAMICO -- CHAMANDO BLOCOS  
# O & aceita como parametro um bloco
def metodo(&bloco)
  bloco
end

m = metodo {|pams| 'Metodos dinamicos'}
p m.call

# É POSSIVEL EXECUTAR UM BLOCO COM O CAMANDO yield
def bloco_yield
  # Veridicar se bloco foi chamado como parametro
  if block_given?
    yield
  else
    p "Chamda para o yeld sem parametros"
  end
end
bloco_yield 
bloco_yield { p "yeld com parametros tipo bloco" }

#######################

##### IMPLEMENTAÇÃO ATTR_ACCESSOR
##### Criando metodos com define_method
module AtributosDimanicos
  def atributos(*atrs)
    atrs.each do |atr|
      define_method("#{atr}=") do |value|
        instance_variable_set "@#{atr}", value
      end

      define_method("#{atr}") do
        instance_variable_get "@#{atr}"
      end
    end
  end
end

class Carro 
  extend AtributosDimanicos

  atributos :nome
end
c = Carro.new
c.nome= "Jorge"
p c.nome
