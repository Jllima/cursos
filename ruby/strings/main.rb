require 'byebug'

a = 'Primeiro aula de string'

# GSUB
p a.gsub('aula', 'aulão')
# -> Primeiro aulão de string"
p a
# -> "Primeiro aula de string"

# include
p a.include?('aula')
# index
p a.index('aula')

# RETIRAR ESPAÇOS LATERAIS - STRIP
b = '  aula de strings  '
p b.strip
# Somente esquerda
p b.lstrip
# Somente da dieita
p b.rstrip