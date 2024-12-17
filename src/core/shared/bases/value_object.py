from abc import ABC, abstractmethod
from dataclasses import dataclass, fields
from typing import Any


@dataclass(frozen=True, repr=False)
class ValueObject(ABC):
    value: Any

    def __post_init__(self):
        self.validate()

    def __str__(self):
        return str(self.value)

    @abstractmethod
    def validate(self) -> None: ...

    def __repr__(self):
        res = f"{self.__class__.__name__}("
        for field in fields(self):
            attr = getattr(self, field.name)
            res += f"{field.name}="
            if isinstance(attr, ValueObject):
                res += attr.__repr__()
            else:
                res += f"{attr}"
            res += ", "
        res = res[:-2] + ")"
        return res

    def __eq__(self, other):
        if not isinstance(other, self.__class__):
            return NotImplemented
        return self.value == other.value
