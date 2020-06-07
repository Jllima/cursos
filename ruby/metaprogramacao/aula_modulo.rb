require 'byebug'
require 'pry-rails'
##################

# ------------------ METAPROGAMAÇÃO -----------------------
# ------------------ MODULOS ------------------------------

# def danilo.mostra
#   "Teste danilo"
# end

# a = danilo.clone
# debugger
# a.mostra

# Na classe da instacia de danilo, defina outros metodos
danilo = 'teste'

class << danilo
  def rodar
    'roda 1'    
  end
  
  def rodar2
    'roda 2'
  end
end

# Metodos de classe, usando metaprogramação

class Pessoa
  class << self
    def falar
      'Ola'
    end
    
    def andar
      'andando'
    end
  end
end

# MODULOS
module Util
  def validar_cpf
    'comprando'
  end
end

class Cliente
  include Util
end

module Util2
  def tirar_espacos 
    gsub(" ", "--")
  end

  def teste
    'Testando'
  end
  
end
# incluo na instancia
String.include Util2
# incluo na classe
String.extend Util2

class Teste
  include Util
  extend Util2
end

Teste.new.validar_cpf
Teste.teste

# Definir um modulo que possibilite uma classe incluir e extender metodos do ModuleTeste
module ModuleTeste
  def instancia
    'metodo de instacia'
  end
  
  def self.included(cls)
    cls.extend Classe
  end

  module Classe
    def metodo_de_classe
      'metodo de classe'
    end
  end
end

class TesteModulo
  include ModuleTeste
end

p TesteModulo.new.instancia
p TesteModulo.metodo_de_classe


